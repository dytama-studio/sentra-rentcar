// import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const authRouter = createTRPCRouter({
  hello: publicProcedure.query(() => {
    return "trpc running bro";
  }),
});
