import {
  pgTable,
  varchar,
  uuid,
  timestamp,
  boolean,
} from "drizzle-orm/pg-core";
import { portofolios } from "./portofolios";

export const portfolioPhotos = pgTable("portfolio_photos", {
  id: uuid("id").notNull().primaryKey().defaultRandom(),
  portfolioId: uuid("portfolio_id").references(() => portofolios.id, {
    onDelete: "cascade",
  }), // Relasi ke portfolios.id
  url: varchar("url", { length: 500 }).notNull(),
  alt: varchar("alt", { length: 255 }).default("portfolio-image"),
  isCover: boolean("is_cover").default(false), // Menandai apakah ini cover utama
  createdAt: timestamp("created_at").defaultNow(),
});
