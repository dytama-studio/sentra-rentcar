import { api } from "@/libs/trpc/react";
import { authClient } from "@/server/auth/client";
import { setUser } from "@/store/reducers/UserDataSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

const useFetchUser = () => {
  const [session, setSession] = useState<any>(undefined);
  const [isSessionLoading, setIsSessionLoading] = useState(true);

  const dispatch = useDispatch();
  const router = useRouter();

  /**
   * 1️⃣ Fetch Session
   */
  useEffect(() => {
    let mounted = true;

    const fetchSession = async () => {
      try {
        const res = await authClient.getSession();

        const sessionData = res?.data?.session;

        if (!mounted) return;

        if (!sessionData) {
          dispatch(setUser(null));
          router.replace("/signin");
          return;
        }

        setSession(sessionData);
      } catch (err) {
        if (!mounted) return;

        dispatch(setUser(null));
        router.replace("/signin");
      } finally {
        if (mounted) {
          setIsSessionLoading(false);
        }
      }
    };

    fetchSession();

    return () => {
      mounted = false;
    };
  }, [dispatch, router]);

  /**
   * 2️⃣ Fetch User Detail (via tRPC)
   */
  const {
    data: user,
    isLoading: isUserLoading,
    error,
  } = api.user.getUserById.useQuery(
    { id: session?.userId },
    {
      enabled: !!session?.userId,
      retry: false,
    }
  );

  /**
   * 3️⃣ Handle Unauthorized Error dari tRPC
   */
  useEffect(() => {
    if (!error) return;

    const errorCode = (error as any)?.data?.code;
    const message = String((error as any)?.message ?? "").toLowerCase();

    const isUnauthorized =
      errorCode === "UNAUTHORIZED" || message.includes("unauthorized");

    if (isUnauthorized) {
      dispatch(setUser(null));
      router.replace("/signin");
    }
  }, [error, dispatch, router]);

  /**
   * 4️⃣ Sync user ke Redux
   */
  useEffect(() => {
    if (user) {
      dispatch(setUser(user));
    }
  }, [user, dispatch]);

  return {
    session,
    user,
    isLoading: isSessionLoading || isUserLoading,
  };
};

export default useFetchUser;
