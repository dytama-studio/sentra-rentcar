import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { organization } from "@/server/database/schema/tables";

export const branch = pgTable("branch", {
  id: text("id").primaryKey(),
  organizationId: text("organizationId")
    .notNull()
    .references(() => organization.id),

  name: text("name").notNull(),
  address: text("address"),
  phone: text("phone"),

  createdAt: timestamp("createdAt").defaultNow(),
});
