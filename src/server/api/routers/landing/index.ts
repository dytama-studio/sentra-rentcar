import { TRPCError } from "@trpc/server";
import { createTRPCRouter, publicProcedure } from "../../trpc";
import { asc, eq } from "drizzle-orm";
import { db, car, carCategory } from "@/server/database";

export const landingRouter = createTRPCRouter({
  getCarLanding: publicProcedure.query(async () => {
    try {
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
        .where(eq(car.status, "active"))
        .leftJoin(carCategory, eq(carCategory.id, car.categoryId))
        .orderBy(asc(car.createdAt));

      const metaPrefix = {
        data,
        meta: {
          code: 200,
          status: "success",
          message: "Berhasil menampilkan vehicle",
        },
      };

      return metaPrefix;
    } catch {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: `Gagal fetch product`,
      });
    }
  }),
});
