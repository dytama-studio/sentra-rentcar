import { api } from "@/libs/trpc/react";
import { authClient } from "@/server/auth/client";
import { setUser } from "@/store/reducers/UserDataSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

const useFetchUser = () => {
  const [session, setSession] = useState<any>(null);
  const [isSessionLoading, setIsSessionLoading] = useState(true);
  const dispatch = useDispatch();
  const router = useRouter();

  // 1️⃣ Fetch session
  useEffect(() => {
    const fetchSession = async () => {
      const { data } = await authClient.getSession();

      if (!data?.session) {
        dispatch(setUser(null));
        router.push("/auth/signin");
        setIsSessionLoading(false);
        return;
      }

      setSession(data.session);
      setIsSessionLoading(false);
    };

    fetchSession();
  }, [dispatch, router]);

  // 2️⃣ Fetch user
  const {
    data: user,
    isLoading: isUserLoading,
    error,
  } = api.user.getUserById.useQuery(
    { id: session?.user?.id },
    {
      enabled: !!session?.user?.id,
      retry: false,
    }
  );

  // 3️⃣ Handle error 401 dari backend
  useEffect(() => {
    if (error) {
      dispatch(setUser(null));
      router.push("/auth/signin");
    }
  }, [error, dispatch, router]);

  // 4️⃣ Set Redux kalau ada user
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
