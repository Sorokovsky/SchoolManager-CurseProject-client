import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useMutating = <Input, Output>(
  keys: string[],
  mutationFunction: (data: Input) => Promise<Output>,
  refreshKeys: string[],
) => {
  const client = useQueryClient();
  return useMutation({
    mutationKey: keys,
    mutationFn: (data: Input) => mutationFunction(data),
    onError: (error) => {
      console.log(error);
    },
    onSuccess: async () => {
      await client.invalidateQueries({ queryKey: refreshKeys, refetchType: "all" });
    },
  });
};
