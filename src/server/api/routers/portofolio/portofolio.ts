import {
  calculateTotalPages,
  getSupabasePath,
  metaResponsePrefix,
} from "@/helpers/globalHelper";
import { createClient } from "@/libs/supabase/client";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { db, portofolios } from "@/server/database";
import { TRPCError } from "@trpc/server";
import { asc, eq } from "drizzle-orm";
import { z } from "zod";

export const portofolioRouter = createTRPCRouter({
  getList: protectedProcedure
    .input((input) => input)
    .query(async ({ input, ctx }: any) => {
      try {
        const page = input?.page || 1;
        const perPage = input?.perPage || 5;
        const offset = (page - 1) * perPage;

        if (!ctx?.session?.user?.id) {
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: `User tidak teridentifikasi`,
          });
        }

        const data = await db
          .select()
          .from(portofolios)
          .limit(perPage)
          .offset(input?.search ? 0 : offset)
          .orderBy(portofolios.createdAt, asc(portofolios.createdAt));

        const count = await db
          .select({ id: portofolios.id })
          .from(portofolios)
          .then((res) => res.length);

        const totalPage = calculateTotalPages(count, perPage);
        const nextPage = page < totalPage ? page + 1 : null;
        const prevPage = page > 1 ? page - 1 : null;

        const metaPrefix = {
          data,
          meta: {
            code: 200,
            status: "success",
            message: "Berhasil menampilkan order",
            page,
            perPage,
            totalPage,
            nextPage,
            prevPage,
          },
        };

        return metaResponsePrefix(metaPrefix);
      } catch (err) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: `Gagal fetch product`,
        });
      }
    }),
  store: protectedProcedure
    .input((input) => input)
    .mutation(async ({ input }: any) => {
      try {
        return await db.insert(portofolios).values({ ...input });
      } catch (err) {
        throw new Error(err as string);
      }
    }),
  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input }) => {
      const portfolio: any = await db.query.portofolios.findFirst({
        where: eq(portofolios.id, input.id),
      });

      const supabase = createClient();

      if (!portfolio) {
        throw new Error("Portfolio not found");
      }

      await db
        .delete(portofolios)
        .where(eq(portofolios.id, input.id as string));

      if (portfolio.cover) {
        const relativePath = getSupabasePath(portfolio.cover, "dytamastorage");

        if (relativePath) {
          const { error } = await supabase.storage
            .from("dytamastorage")
            .remove([relativePath]);

          if (error) {
            throw new Error(error.message as string);
          }
        }
      }

      return { success: true };
    }),
  getDetail: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      try {
        return await db
          .select()
          .from(portofolios)
          .where(eq(portofolios.id, input?.id))
          .then((res) => res.at(0));
      } catch (err) {
        throw new Error(err as string);
      }
    }),
  update: protectedProcedure
    .input((input) => input)
    .mutation(async ({ input }: any) => {
      try {
        return await db
          .update(portofolios)
          .set({ ...input })
          .where(eq(portofolios.id, input.id))
          .returning();
      } catch (err) {
        throw new Error(err as string);
      }
    }),
});
