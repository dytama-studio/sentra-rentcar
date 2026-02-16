import { pgTable, text, uuid } from "drizzle-orm/pg-core";
import { organization } from "@/server/database/schema/tables";

export const carCategory = pgTable("car_category", {
  id: uuid("id").notNull().primaryKey().defaultRandom(),
  organizationId: uuid("organizationId")
    .notNull()
    .references(() => organization.id),
  name: text("name").notNull(),
});
