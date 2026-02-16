import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const organization = pgTable("organization", {
  id: uuid("id").notNull().primaryKey().defaultRandom(),
  name: text("name").notNull(),
  slug: text("slug").unique(),
  phone: text("phone"),
  email: text("email"),
  address: text("address"),
  createdAt: timestamp("createdAt").defaultNow(),
});
