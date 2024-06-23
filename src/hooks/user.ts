import { updateProfile } from "@/apis/user";
import { toast } from "@/components/ui/use-toast";
import { Profile, UserData } from "@/types/UserData";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  const {
    mutateAsync: updateProfileMutation,
    isPending: updateProfilePending,
    error: updateProfileError,
    isSuccess: updateProfileSuccess,
  } = useMutation({
    mutationFn: async ({ id, data }: { id: number; data: Profile }) =>
      await updateProfile({ id: id, data: data }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-current-user"] });
      toast({
        title: "Yay!",
        description: "Berhasil ubah profil",
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
    updateProfileMutation,
    updateProfilePending,
    updateProfileError,
    updateProfileSuccess,
  };
};
