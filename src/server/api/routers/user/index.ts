import { createTRPCRouter, protectedProcedure } from "../../trpc";
import { db } from "@/server/database";
import { eq } from "drizzle-orm";
import {
  user,
  organizationUser,
  organization,
  branch,
} from "@/server/database/schema";

export const userRouter = createTRPCRouter({
  getUserById: protectedProcedure
    .input((input) => input)
    .query(async ({ input, ctx }: any) => {
      try {
        const result = await db
          .select({
            name: user.name,
            email: user.email,
            role: user.role,
            email_user: user.email,
            isActive: user.isActive,
            organization_id: organizationUser.organizationId,
            organization_name: organization.name,
            organization_phone: organization.phone,
            organization_email: organization.email,
            organization_address: organization.address,
            branch_id: branch.id,
            branch_name: branch.name,
            branch_address: branch.address,
            branch_phone: branch.phone,
          })
          .from(user)
          .leftJoin(organizationUser, eq(organizationUser.userId, user.id))
          .leftJoin(
            organization,
            eq(organization.id, organizationUser.organizationId)
          )
          .leftJoin(
            branch,
            eq(branch.organizationId, organizationUser.organizationId)
          )
          .where(eq(user.id, input.id))
          .then((res) => res.at(0));

        return result;
      } catch (err) {
        throw new Error(err as string);
      }
    }),
});
