// import { postRouter } from "@/server/api/routers/post";
import { authRouter } from "./routers/auth";
import { carManagementRouter } from "./routers/carmanagement";
import { createCallerFactory, createTRPCRouter } from "@/server/api/trpc";
import { userRouter } from "./routers/user";

export const appRouter = createTRPCRouter({
  auth: authRouter,
  user: userRouter,
  car: carManagementRouter,
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);
