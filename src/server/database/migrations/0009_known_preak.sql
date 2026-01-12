ALTER TABLE "portofolios" ADD COLUMN "slug" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "portofolios" ADD CONSTRAINT "portofolios_slug_unique" UNIQUE("slug");