import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { organization } from "@/server/database/schema/tables";

export const branch = pgTable("branch", {
  id: uuid("id").notNull().primaryKey().defaultRandom(),
  organizationId: uuid("organizationId")
    .notNull()
    .references(() => organization.id),

  name: text("name").notNull(),
  address: text("address"),
  phone: text("phone"),

  createdAt: timestamp("createdAt").defaultNow(),
});
