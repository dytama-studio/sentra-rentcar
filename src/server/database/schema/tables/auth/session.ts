import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { user } from "../../tables";

export const session = pgTable("session", {
  id: text("id").primaryKey(),

  expiresAt: timestamp("expiresAt").notNull(),
  token: text("token").notNull().unique(),
  ipAddress: text("ipAddress"),
  userAgent: text("userAgent"),

  userId: uuid("userId")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),

  createdAt: timestamp("createdAt").defaultNow(),
  updatedAt: timestamp("updatedAt")
    .defaultNow()
    .$onUpdate(() => new Date()),
});
