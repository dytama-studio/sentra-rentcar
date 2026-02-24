import { pgTable, text, timestamp, boolean, uuid } from "drizzle-orm/pg-core";
import { user, organization } from "@/server/database/schema/tables";

export const organizationUser = pgTable("organization_user", {
  id: uuid("id").notNull().primaryKey().defaultRandom(),
  userId: uuid("userId")
    .notNull()
    .references(() => user.id),

  organizationId: uuid("organizationId")
    .notNull()
    .references(() => organization.id),

  role: text("role").default("owner"), // owner | admin | staff
  isActive: boolean("isActive").default(true),

  createdAt: timestamp("createdAt").defaultNow(),
});
