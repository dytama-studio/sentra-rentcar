// import { postRouter } from "@/server/api/routers/post";
import { authRouter } from "./routers/auth";
import { carManagementRouter } from "./routers/carmanagement";
import { createCallerFactory, createTRPCRouter } from "@/server/api/trpc";
import { userRouter } from "./routers/user";
import { landingRouter } from "./routers/landing";

export const appRouter = createTRPCRouter({
  auth: authRouter,
  user: userRouter,
  car: carManagementRouter,
  landing: landingRouter,
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);
