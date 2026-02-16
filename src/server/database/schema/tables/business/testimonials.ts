import {
  pgTable,
  text,
  timestamp,
  integer,
  boolean,
  uuid,
} from "drizzle-orm/pg-core";
import { organization } from "@/server/database/schema/tables";

export const testimonial = pgTable("testimonial", {
  id: uuid("id").notNull().primaryKey().defaultRandom(),

  organizationId: uuid("organizationId")
    .notNull()
    .references(() => organization.id),

  name: text("name"),
  rating: integer("rating"),
  message: text("message"),
  isPublished: boolean("isPublished").default(false),

  createdAt: timestamp("createdAt").defaultNow(),
});
