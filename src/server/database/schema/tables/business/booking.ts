import { pgTable, text, timestamp, date } from "drizzle-orm/pg-core";
import { organization, car } from "@/server/database/schema/tables";

export const booking = pgTable("booking", {
  id: text("id").primaryKey(),

  organizationId: text("organizationId")
    .notNull()
    .references(() => organization.id),

  carId: text("carId").references(() => car.id),

  customerName: text("customerName"),
  customerPhone: text("customerPhone"),

  startDate: date("startDate"),
  endDate: date("endDate"),

  status: text("status").default("pending"),
  source: text("source").default("whatsapp"), // whatsapp | online | admin

  createdAt: timestamp("createdAt").defaultNow(),
});
