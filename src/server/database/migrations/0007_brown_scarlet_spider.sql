ALTER TABLE "portofolios" DROP CONSTRAINT "portofolios_code_unique";--> statement-breakpoint
ALTER TABLE "portofolios" DROP CONSTRAINT "portofolios_slug_unique";--> statement-breakpoint
ALTER TABLE "portofolios" ADD COLUMN "title" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "portofolios" ADD COLUMN "meta_title" varchar(500);--> statement-breakpoint
ALTER TABLE "portofolios" ADD COLUMN "meta_keywords" varchar(500);--> statement-breakpoint
ALTER TABLE "portofolios" DROP COLUMN "code";--> statement-breakpoint
ALTER TABLE "portofolios" DROP COLUMN "name";--> statement-breakpoint
ALTER TABLE "portofolios" DROP COLUMN "slug";