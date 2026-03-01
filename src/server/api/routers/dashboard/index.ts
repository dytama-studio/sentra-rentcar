import { sql } from "drizzle-orm";
import { createTRPCRouter, protectedProcedure } from "../../trpc";
import { db, car } from "@/server/database";

export const dashboardRouter = createTRPCRouter({
  getDashboard: protectedProcedure.query(async () => {
    try {
      const result = await db
        .select({
          totalUnit: sql<number>`count(*)`,
          totalUnitInActive: sql<number>`count(case when ${car.status} = 'inactive' then 1 end)`,
          totalCategory: sql<number>`count(distinct ${car.categoryId})`,
        })
        .from(car);

      return result[0];
    } catch (err) {
      throw new Error(err as string);
    }
  }),
});
