import { getCurrentUser, login } from "@/apis/auth";
import { toast } from "@/components/ui/use-toast";
import { axiosInstance } from "@/lib/axios";
import { Login } from "@/types/Login";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
import { AxiosError } from "axios";

export const useGetCurrentUser = () => {
  const authHeader = useAuthHeader();
  axiosInstance.defaults.headers.common["Authorization"] = authHeader;

  const {
    data: userData,
    isLoading: userLoading,
    isError: userError,
    error: userErrorData,
    refetch: refetchUser,
  } = useQuery({
    queryFn: async () => await getCurrentUser(),
    staleTime: Infinity,
    queryKey: ["get-current-user", authHeader],
  });

  return { userData, userLoading, userError, userErrorData, refetchUser };
};

export const useLogin = () => {
  const queryClient = useQueryClient();
  const {
    data: loginData,
    mutateAsync: loginMutation,
    isPending: loginPending,
    error: loginError,
    isSuccess: loginSuccess,
  } = useMutation({
    mutationFn: async (data: Login) => await login(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-current-user"] });
      toast({
        title: "Yay!",
        description: "Berhasil login",
      });
    },
    onError(error) {
      if (error instanceof AxiosError)
        toast({
          title: "Oops!",
          description: error?.response?.data?.error,
          variant: "destructive",
        });
    },
  });

  return {
    loginData,
    loginMutation,
    loginPending,
    loginError,
    loginSuccess,
  };
};
