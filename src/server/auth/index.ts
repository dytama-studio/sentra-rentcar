import { betterAuth, type BetterAuthOptions } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { openAPI, admin } from "better-auth/plugins";
import { headers } from "next/headers";
import { cache } from "react";
import { db } from "../database";
import { transporter } from "./mailer";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
    sendResetPassword: async ({ user, url }: any) => {
      await transporter.sendMail({
        to: user.email,
        subject: "Reset Password Sentra Rent",
        html: `
          <p>Halo ${user.name ?? "User"},</p>
          <p>Klik link berikut untuk reset password:</p>
          <a href="${url}">${url}</a>
          <p>Link berlaku beberapa menit.</p>
        `,
      });
    },
  },
  plugins: [
    openAPI(), // /api/auth/reference
    admin({
      impersonationSessionDuration: 60 * 60 * 24 * 7, // 7 days
    }),
  ],
  session: {
    expiresIn: 60 * 60 * 24 * 3, // 3 days
    updateAge: 60 * 60 * 24, // 1 day (every 1 day the session expiration is updated)
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60, // Cache duration in seconds
    },
  },
  rateLimit: {
    window: 60, // time window in seconds
    max: 5, // max requests in the window
  },
} satisfies BetterAuthOptions);

export const getServerSession = cache(
  async () =>
    await auth.api.getSession({
      headers: await headers(),
    })
);

export type Session = typeof auth.$Infer.Session;
export type AuthUserType = Session["user"];
