import "dotenv/config"; // Wajib kalau digunakan di CLI juga

import * as schema from "./schema";
import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";

const client = postgres(process.env.DATABASE_URL!);
export const db = drizzle(client, { schema });

// const client = postgres(process.env.DATABASE_URL!, {
//   ssl: process.env.DATABASE_URL?.includes("vercel") ? "require" : undefined,
// });

// export const db = drizzle(client, { schema });
