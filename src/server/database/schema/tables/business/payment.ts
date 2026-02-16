import { pgTable, text, timestamp, integer, uuid } from "drizzle-orm/pg-core";
import { booking } from "@/server/database/schema/tables";

export const payment = pgTable("payment", {
  id: uuid("id").notNull().primaryKey().defaultRandom(),
  bookingId: uuid("bookingId").references(() => booking.id),

  amount: integer("amount"),
  method: text("method"), // transfer | midtrans | cash
  status: text("status"), // pending | paid | failed

  providerRef: text("providerRef"),
  createdAt: timestamp("createdAt").defaultNow(),
});
