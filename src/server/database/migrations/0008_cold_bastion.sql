ALTER TABLE "portofolios" ALTER COLUMN "overview_description" SET DATA TYPE jsonb;--> statement-breakpoint
ALTER TABLE "portofolios" ALTER COLUMN "overview_description" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "portofolios" ALTER COLUMN "challenges" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "portofolios" ALTER COLUMN "solutions" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "portofolios" ALTER COLUMN "features" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "portofolios" ALTER COLUMN "project_year" SET DATA TYPE varchar(500);--> statement-breakpoint
ALTER TABLE "portofolios" ALTER COLUMN "project_year" DROP NOT NULL;