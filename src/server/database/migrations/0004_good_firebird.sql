CREATE TABLE "portofolios" (
	"id" varchar(50) PRIMARY KEY NOT NULL,
	"code" varchar(50) NOT NULL,
	"slug" varchar(255) NOT NULL,
	"name" varchar(255) NOT NULL,
	"type" varchar(100) NOT NULL,
	"category" varchar(255) NOT NULL,
	"duration" varchar(100),
	"client" varchar(255),
	"overview_description" text NOT NULL,
	"meta_description" text,
	"project_year" integer NOT NULL,
	"project_link" varchar(500),
	"img_url" varchar(500),
	"technologies" jsonb,
	"challenges" jsonb,
	"solutions" jsonb,
	"features" jsonb,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "portofolios_code_unique" UNIQUE("code"),
	CONSTRAINT "portofolios_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "portfolio_photos" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "portfolio_photos_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"portfolio_id" varchar(50) NOT NULL,
	"url" varchar(500) NOT NULL,
	"alt" varchar(255) DEFAULT 'portfolio-image',
	"is_cover" boolean DEFAULT false,
	"created_at" timestamp DEFAULT now()
);
