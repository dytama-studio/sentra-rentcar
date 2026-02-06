import "dotenv/config";
import bcrypt from "bcryptjs";
import { nanoid } from "nanoid";
import { db } from "./connection";

import {
  user,
  account,
  organization,
  organizationUser,
  branch,
} from "./schema/tables";

async function seed() {
  console.log("🌱 Seeding database...");
  console.log("DATABASE_URL:", process.env.DATABASE_URL);
  // =========================
  // 1. ORGANIZATION
  // =========================
  const organizationId = nanoid();

  await db.insert(organization).values({
    id: organizationId,
    name: "Sentra Rent Car",
    slug: "sentra-rent-car",
    phone: "08123456789",
    email: "admin@gmail.com",
    address: "Indonesia",
  });

  console.log("✅ Organization created");

  // =========================
  // 2. USER (ADMIN)
  // =========================
  const userId = nanoid();
  const hashedPassword = await bcrypt.hash("admin480", 10);

  await db.insert(user).values({
    id: userId,
    name: "Admin Sentra",
    email: "admin@gmail.com",
    emailVerified: true,
    role: "admin",
    isActive: true,
  });

  console.log("✅ User admin created");

  // =========================
  // 3. ACCOUNT (EMAIL + PASSWORD)
  // =========================
  await db.insert(account).values({
    id: nanoid(),
    userId,
    providerId: "credentials",
    accountId: "admin@gmail.com",
    password: hashedPassword,
    createdAt: new Date(),
  });

  console.log("✅ Account credentials created");

  // =========================
  // 4. ORGANIZATION USER (OWNER)
  // =========================
  await db.insert(organizationUser).values({
    id: nanoid(),
    userId,
    organizationId,
    role: "owner",
    isActive: true,
  });

  console.log("✅ Organization user created");

  // =========================
  // 5. DEFAULT BRANCH
  // =========================
  await db.insert(branch).values({
    id: nanoid(),
    organizationId,
    name: "Sentra Rent Car - Pusat",
    address: "Kantor Pusat",
    phone: "08123456789",
  });

  console.log("✅ Branch created");

  console.log("🎉 Seeding finished successfully");
}

seed()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("❌ Seeding failed:", err);
    process.exit(1);
  });
