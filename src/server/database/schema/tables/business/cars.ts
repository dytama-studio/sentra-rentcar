import {
  pgTable,
  text,
  integer,
  boolean,
  timestamp,
} from "drizzle-orm/pg-core";
import { organization, carCategory } from "@/server/database/schema/tables";

export const car = pgTable("car", {
  id: text("id").primaryKey(),

  organizationId: text("organizationId")
    .notNull()
    .references(() => organization.id),

  branchId: text("branchId"), // optional (multi cabang)

  categoryId: text("categoryId").references(() => carCategory.id),

  name: text("name").notNull(),
  pricePerDay: integer("pricePerDay"),
  description: text("description"),
  thumbnail: text("thumbnail"),

  status: text("status").default("available"), // available | rented | maintenance
  isActive: boolean("isActive").default(true),

  createdAt: timestamp("createdAt").defaultNow(),
});
