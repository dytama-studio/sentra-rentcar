import { pgTable, text, timestamp, boolean } from "drizzle-orm/pg-core";
import { user, organization } from "@/server/database/schema/tables";

export const organizationUser = pgTable("organization_user", {
  id: text("id").primaryKey(),

  userId: text("userId")
    .notNull()
    .references(() => user.id),

  organizationId: text("organizationId")
    .notNull()
    .references(() => organization.id),

  role: text("role").default("owner"), // owner | admin | staff
  isActive: boolean("isActive").default(true),

  createdAt: timestamp("createdAt").defaultNow(),
});
