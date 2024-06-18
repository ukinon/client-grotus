import { login } from "@/apis/auth";
import { register } from "@/apis/user";
import { toast } from "@/components/ui/use-toast";
import { UserData } from "@/types/UserData";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useRegister = () => {
  const queryClient = useQueryClient();
  const {
    data: registerData,
    mutateAsync: registerMutation,
    isPending: registerPending,
    error: registerError,
    isSuccess: registerSuccess,
  } = useMutation({
    mutationFn: async (data: UserData) => await register(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-current-user"] });
      toast({
        title: "Yay!",
        description: "Berhasil Daftar",
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
    registerData,
    registerMutation,
    registerPending,
    registerError,
    registerSuccess,
  };
};
