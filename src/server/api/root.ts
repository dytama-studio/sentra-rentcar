// import { postRouter } from "@/server/api/routers/post";
import { authRouter } from "./routers/auth";
import { carManagementRouter } from "./routers/carmanagement";
import { createCallerFactory, createTRPCRouter } from "@/server/api/trpc";
import { userRouter } from "./routers/user";
import { landingRouter } from "./routers/landing";
import { profileRouter } from "./routers/profile";
import { dashboardRouter } from "./routers/dashboard";

export const appRouter = createTRPCRouter({
  auth: authRouter,
  user: userRouter,
  dashboard: dashboardRouter,
  car: carManagementRouter,
  landing: landingRouter,
  profile: profileRouter,
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);
