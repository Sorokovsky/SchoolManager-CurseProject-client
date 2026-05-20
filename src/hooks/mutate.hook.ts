import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useMutating = <Input, Output>(
  keys: string[],
  mutationFunction: (data: Input) => Promise<Output>,
  refreshKeys: string[],
) => {
  const client = useQueryClient();
  return useMutation({
    mutationKey: keys,
    mutationFn: (data: Input) => mutationFunction(data),
    onError: (error: { title: string }) => {
      toast.error(error.title);
    },
    onSuccess: async () => {
      await client.invalidateQueries({
        queryKey: refreshKeys,
        refetchType: "all",
      });
    },
  });
};
