import {
  pgTable,
  text,
  integer,
  // boolean,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";
import { organization, carCategory } from "@/server/database/schema/tables";

export const car = pgTable("car", {
  id: uuid("id").notNull().primaryKey().defaultRandom(),
  organizationId: uuid("organizationId")
    .notNull()
    .references(() => organization.id),
  branchId: uuid("branchId"), // optional (multi cabang)
  categoryId: uuid("categoryId").references(() => carCategory.id),
  name: text("name").notNull(),
  pricePerDay: integer("pricePerDay"),
  description: text("description"),
  thumbnail: text("thumbnail"),
  status: text("status").default("active"), // available | rented | maintenance
  // isActive: boolean("isActive").default(true),
  transmission: text("transmission"),
  capacity: integer("capacity"),
  storage: integer("storage"),
  createdAt: timestamp("createdAt").defaultNow(),
});
