import { sql } from "drizzle-orm";
import { db } from "@/server";

export async function GET(req: Request) {
  const auth = req.headers.get("authorization");

  if (auth !== `Bearer ${process.env.KEEP_ALIVE_SECRET}`) {
    return new Response("Unauthorized", { status: 401 });
  }

  await db.execute(sql`select 1`);
  return Response.json({ ok: true });
}
