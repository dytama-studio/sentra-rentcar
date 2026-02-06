import {
  pgTable,
  text,
  timestamp,
  uniqueIndex,
  boolean,
} from "drizzle-orm/pg-core";
import { organization } from "@/server/database/schema/tables";

export const seoPage = pgTable(
  "seo_page",
  {
    id: text("id").primaryKey(),

    organizationId: text("organizationId")
      .notNull()
      .references(() => organization.id),

    pageKey: text("pageKey").notNull(),
    // contoh: home | cars | about | contact

    title: text("title"),
    description: text("description"),

    ogImage: text("ogImage"),

    isIndex: boolean("isIndex").default(true),
    isFollow: boolean("isFollow").default(true),

    createdAt: timestamp("createdAt").defaultNow(),
  },
  (table) => ({
    uniqueSeoPage: uniqueIndex("seo_page_org_page_key").on(
      table.organizationId,
      table.pageKey
    ),
  })
);
