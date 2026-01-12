ALTER TABLE "portofolios" ALTER COLUMN "id" SET DATA TYPE uuid;--> statement-breakpoint
ALTER TABLE "portofolios" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();--> statement-breakpoint
ALTER TABLE "portfolio_photos" ALTER COLUMN "id" SET DATA TYPE uuid;--> statement-breakpoint
ALTER TABLE "portfolio_photos" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();--> statement-breakpoint
ALTER TABLE "portfolio_photos" ALTER COLUMN "id" DROP IDENTITY;--> statement-breakpoint
ALTER TABLE "portfolio_photos" ALTER COLUMN "portfolio_id" SET DATA TYPE uuid;--> statement-breakpoint
ALTER TABLE "portfolio_photos" ADD CONSTRAINT "portfolio_photos_portfolio_id_portofolios_id_fk" FOREIGN KEY ("portfolio_id") REFERENCES "public"."portofolios"("id") ON DELETE cascade ON UPDATE no action;