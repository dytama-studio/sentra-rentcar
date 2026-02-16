import { createTRPCRouter, protectedProcedure } from "../../trpc";
import { TRPCError } from "@trpc/server";
import { db, car, carCategory, organizationUser } from "@/server/database";
import { asc, eq } from "drizzle-orm";
import {
  metaResponsePrefix,
  calculateTotalPages,
} from "@/helpers/globalHelper";

export const carManagementRouter = createTRPCRouter({
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
          .from(car)
          .limit(perPage)
          .offset(input?.search ? 0 : offset)
          .orderBy(car.createdAt, asc(car.createdAt));

        const count = await db
          .select({ id: car.id })
          .from(car)
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
      } catch {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: `Gagal fetch product`,
        });
      }
    }),
  storeCategory: protectedProcedure
    .input((input) => input)
    .mutation(async ({ input, ctx }: any) => {
      const userId = ctx.session.session.userId;
      const orgUser = await db
        .select({
          organizationId: organizationUser.organizationId,
        })
        .from(organizationUser)
        .where(eq(organizationUser.userId, userId))
        .then((res) => res.at(0));

      if (!orgUser) {
        throw new Error("Organization not found");
      }

      await db.insert(carCategory).values({
        organizationId: orgUser.organizationId,
        name: input.name,
      });

      try {
        return await db.insert(carCategory).values({ ...input });
      } catch (err) {
        throw new Error(err as string);
      }
    }),
});
