import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const organization = pgTable("organization", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").unique(),
  phone: text("phone"),
  email: text("email"),
  address: text("address"),
  createdAt: timestamp("createdAt").defaultNow(),
});
