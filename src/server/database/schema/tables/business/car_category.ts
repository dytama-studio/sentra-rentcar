import { pgTable, text } from "drizzle-orm/pg-core";
import { organization } from "@/server/database/schema/tables";

export const carCategory = pgTable("car_category", {
  id: text("id").primaryKey(),
  organizationId: text("organizationId")
    .notNull()
    .references(() => organization.id),
  name: text("name").notNull(),
});
