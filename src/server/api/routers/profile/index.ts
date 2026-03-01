import { db, organization } from "@/server/database";
import { createTRPCRouter, protectedProcedure } from "../../trpc";
import { eq } from "drizzle-orm";

export const profileRouter = createTRPCRouter({
  getProfile: protectedProcedure.query(async () => {
    try {
      const data = await db
        .select()
        .from(organization)
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
  storeProfile: protectedProcedure
    .input((input) => input)
    .mutation(async ({ input, ctx }: any) => {
      const userId = ctx.session.session.userId;
      if (!userId) {
        throw new Error("User ID tidak ditemukan");
      }

      try {
        return await db
          .update(organization)
          .set({ ...input })
          .where(eq(organization.id, input.id))
          .returning();
      } catch (err) {
        throw new Error(err as string);
      }
    }),
});
