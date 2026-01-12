import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { db, portofolios } from "@/server/database";
import { asc, eq, desc } from "drizzle-orm";
import { z } from "zod";

export const landingRouter = createTRPCRouter({
  getTop3Portofolio: publicProcedure.query(async () => {
    try {
      const data = await db
        .select()
        .from(portofolios)
        .limit(3)
        .orderBy(desc(portofolios.createdAt));
      const metaPrefix = {
        data,
        meta: {
          code: 200,
          status: "success",
          message: "Berhasil ambil data",
        },
      };

      return metaPrefix;
    } catch (err) {
      throw new Error(err as string);
    }
  }),
  getAllPortofolio: publicProcedure.query(async () => {
    try {
      const data = await db
        .select()
        .from(portofolios)
        .orderBy(portofolios.createdAt, asc(portofolios.createdAt));
      const metaPrefix = {
        data,
        meta: {
          code: 200,
          status: "success",
          message: "Berhasil ambil data",
        },
      };

      return metaPrefix;
    } catch (err) {
      throw new Error(err as string);
    }
  }),
  getDetailPortofolio: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ input }) => {
      try {
        console.log(input);
        const data = await db
          .select()
          .from(portofolios)
          .where(eq(portofolios.slug, input?.slug))
          .then((res) => res.at(0));

        const metaPrefix = {
          data,
          meta: {
            code: 200,
            status: "success",
            message: "Berhasil ambil data",
          },
        };
        return metaPrefix;
      } catch (err) {
        throw new Error(err as string);
      }
    }),

  getAllSlugs: publicProcedure.query(async () => {
    const data = await db
      .select({
        slug: portofolios.slug,
        updatedAt: portofolios.updatedAt,
      })
      .from(portofolios)
      .orderBy(desc(portofolios.updatedAt));

    // format agar sesuai dengan [...slug]
    return data.map((item) => ({
      slug: item.slug.split("/"),
      updatedAt: item.updatedAt,
    }));
  }),

  getBySlug: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ input }) => {
      const data = await db.query.portofolios.findFirst({
        where: eq(portofolios.slug, input.slug),
      });
      return data;
    }),
});
