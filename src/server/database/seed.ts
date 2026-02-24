import "dotenv/config";
import { db } from "./connection";
import { hashPassword } from "better-auth/crypto";
import { randomUUID } from "crypto";

import {
  user,
  account,
  organization,
  organizationUser,
  branch,
} from "./schema/tables";

async function seed() {
  console.log("🌱 Seeding database...");

  try {
    // =========================
    // 1. ORGANIZATION
    // =========================
    const [createdOrganization] = await db
      .insert(organization)
      .values({
        name: "Sentra Rent Car",
        slug: "sentra-rent-car",
        phone: "08123456789",
        email: "admin@gmail.com",
        address: "Indonesia",
      })
      .returning();

    console.log("✅ Organization created");

    // =========================
    // 2. USER (ADMIN)
    // =========================
    const emailAdmin = "admin@gmail.com";
    const hashedPassword = await hashPassword("admin480");

    const [createdUser] = await db
      .insert(user)
      .values({
        name: "Admin Sentra",
        email: emailAdmin,
        emailVerified: true,
        role: "admin",
        isActive: true,
      })
      .returning();

    console.log("✅ User admin created");

    // =========================
    // 3. ACCOUNT (Better Auth Credential)
    // =========================
    await db.insert(account).values({
      id: randomUUID(), // karena id account = text dan tidak auto
      userId: createdUser.id,
      accountId: createdUser.id,
      providerId: "credential",
      providerAccountId: emailAdmin,
      password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    console.log("✅ Account credentials created");

    // =========================
    // 4. ORGANIZATION USER (OWNER ROLE)
    // =========================
    await db.insert(organizationUser).values({
      userId: createdUser.id,
      organizationId: createdOrganization.id,
      role: "owner",
      isActive: true,
    });

    console.log("✅ Organization user created");

    // =========================
    // 5. DEFAULT BRANCH
    // =========================
    await db.insert(branch).values({
      organizationId: createdOrganization.id,
      name: "Sentra Rent Car - Pusat",
      address: "Kantor Pusat",
      phone: "08123456789",
    });

    console.log("✅ Branch created");

    console.log("🎉 Seeding finished successfully");
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  }

  process.exit(0);
}

seed();
