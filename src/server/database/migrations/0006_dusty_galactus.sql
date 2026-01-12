ALTER TABLE "portofolios" ADD COLUMN "cover_img" varchar(500);--> statement-breakpoint
ALTER TABLE "portofolios" DROP COLUMN "category";--> statement-breakpoint
ALTER TABLE "portofolios" DROP COLUMN "img_url";