import { toast } from "@/components/ui/use-toast";
import { axiosInstance } from "@/lib/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDelete = ({
  id,
  path,
  queryKey,
}: {
  id: number;
  path: string;
  queryKey: string[];
}) => {
  const queryClient = useQueryClient();
  const {
    mutateAsync: deleteMutation,
    data: deleteData,
    isPending: deleteIsPending,
    error: deleteError,
    isSuccess: deleteIsSuccess,
  } = useMutation({
    mutationFn: async () => await axiosInstance.delete(`/${path}/${id}`),
    onSuccess: () => {
      queryKey.map((item) => {
        queryClient.invalidateQueries({ queryKey: [item] });
      });
      toast({
        title: "Yay!",
        description: "Berhasil hapus",
      });
    },
    onError: () => {
      toast({
        title: "Oops!",
        description: "Gagal hapus",
      });
    },
  });
  return {
    deleteMutation,
    deleteData,
    deleteIsPending,
    deleteError,
    deleteIsSuccess,
  };
};
