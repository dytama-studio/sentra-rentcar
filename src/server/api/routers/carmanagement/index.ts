import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "../../trpc";
import { TRPCError } from "@trpc/server";
import {
  db,
  car,
  carCategory,
  organizationUser,
  branch,
} from "@/server/database";
import { asc, eq } from "drizzle-orm";
import {
  metaResponsePrefix,
  calculateTotalPages,
  getSupabasePath,
} from "@/helpers/globalHelper";
import { z } from "zod";
import { createClient } from "@/libs/supabase/client";

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
          .select({
            id: car.id,
            name: car.name,
            categoryName: carCategory.name,
            pricePerDay: car.pricePerDay,
            description: car.description,
            thumbnail: car.thumbnail,
            transmission: car.transmission,
            status: car.status,
            capacity: car.capacity,
            storage: car.storage,
            createdAt: car.createdAt,
          })
          .from(car)
          .leftJoin(carCategory, eq(carCategory.id, car.categoryId))
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

  storeCar: protectedProcedure
    .input((input) => input)
    .mutation(async ({ input, ctx }: any) => {
      const userId = ctx.session.session.userId;

      const getOrgBranch = await db
        .select({
          organizationId: organizationUser.organizationId,
          branchId: branch.id,
        })
        .from(organizationUser)
        .leftJoin(
          branch,
          eq(branch.organizationId, organizationUser.organizationId)
        )
        .where(eq(organizationUser.userId, userId))
        .then((res) => res.at(0));

      if (!getOrgBranch) {
        throw new Error("Branch atau Organization tidak ditemukan");
      }

      const sendData = {
        ...input,
        organizationId: getOrgBranch.organizationId,
        branchId: getOrgBranch.branchId,
      };

      return await db.insert(car).values(sendData);
    }),
  deleteCar: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input }) => {
      const getCar = await db.query.car.findFirst({
        where: eq(car.id, input.id),
      });

      const supabase = createClient();
      if (!getCar) {
        throw new Error("Car not found");
      }

      await db.delete(car).where(eq(car.id, input.id as string));

      if (getCar.thumbnail) {
        const relativePath = getSupabasePath(getCar.thumbnail, "sentracar");

        if (relativePath) {
          const { error } = await supabase.storage
            .from("sentracar")
            .remove([relativePath]);

          if (error) {
            throw new Error(error.message as string);
          }
        }
      }

      return { success: true };
    }),
  getDetailCar: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      try {
        return await db
          .select()
          .from(car)
          .where(eq(car.id, input.id))
          .then((res) => res.at(0));
      } catch (err) {
        throw new Error(err as string);
      }
    }),
  updateCar: protectedProcedure
    .input((input) => input)
    .mutation(async ({ input }: any) => {
      try {
        return await db
          .update(car)
          .set({ ...input })
          .where(eq(car.id, input.id))
          .returning();
      } catch (err) {
        throw new Error(err as string);
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

      return await db.insert(carCategory).values({
        organizationId: orgUser.organizationId,
        name: input.name,
      });
    }),
  getCategory: publicProcedure.query(async () => {
    try {
      const data = await db.select().from(carCategory);
      const ddl = data.map((item) => ({
        code: item.id,
        display: item.name,
      }));

      const metaPrefix = {
        ddl,
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
});
