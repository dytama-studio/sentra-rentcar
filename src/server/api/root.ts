// import { postRouter } from "@/server/api/routers/post";
import { authRouter } from "./routers/auth";
import { carManagementRouter } from "./routers/carmanagement";
import { createCallerFactory, createTRPCRouter } from "@/server/api/trpc";

export const appRouter = createTRPCRouter({
  auth: authRouter,
  car: carManagementRouter,
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);
