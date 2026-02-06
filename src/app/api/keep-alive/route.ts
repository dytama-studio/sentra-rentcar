import { sql } from "drizzle-orm";
import { db } from "@/server";

export async function GET() {
  try {
    await db.execute(sql`select 1`);
    return Response.json({ ok: true });
  } catch (e) {
    console.error(e);
    return new Response("error", { status: 500 });
  }
}
