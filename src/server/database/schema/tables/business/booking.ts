import { pgTable, text, timestamp, date, uuid } from "drizzle-orm/pg-core";
import { organization, car } from "@/server/database/schema/tables";

export const booking = pgTable("booking", {
  id: uuid("id").notNull().primaryKey().defaultRandom(),
  organizationId: uuid("organizationId")
    .notNull()
    .references(() => organization.id),
  carId: uuid("carId").references(() => car.id),
  customerName: text("customerName"),
  customerPhone: text("customerPhone"),
  startDate: date("startDate"),
  endDate: date("endDate"),
  status: text("status").default("pending"),
  source: text("source").default("whatsapp"), // whatsapp | online | admin
  createdAt: timestamp("createdAt").defaultNow(),
});
