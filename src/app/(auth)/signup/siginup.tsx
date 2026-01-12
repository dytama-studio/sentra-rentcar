"use client";

import AuthDefault from "@/components/authlayout/AuthDefault";
import { UserSignUp } from "@/interface/auth";
import SignUpModule, { SignUpFormRefType } from "@/modules/auth/signup/module";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { authClient } from "@/server/auth/client";

const SignInUp = () => {
  const ref = useRef<SignUpFormRefType>(null);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const handleSignUp: SubmitHandler<UserSignUp> = async (values) => {
    await authClient.signUp.email(
      {
        email: values.email,
        password: values.password,
        name: values.name,
      },
      {
        onRequest: () => setLoading(true),
        onSuccess: () => {
          setLoading(false);
          router.push("/signin");
        },
        onError: (ctx) => {
          console.log("error", ctx);
          setErrMsg(ctx.error.message ?? "Something went wrong.");
        },
      }
    );

    setLoading(false);
  };

  return (
    <AuthDefault>
      <SignUpModule
        ref={ref}
        onSubmit={handleSignUp}
        errorMsg={errMsg}
        onLoading={loading}
      />
    </AuthDefault>
  );
};

export default SignInUp;
