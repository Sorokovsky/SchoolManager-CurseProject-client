import { useQuery } from "@tanstack/react-query";

export const useQuerying = <Data>(
  keys: string[],
  queryFunction: (payload: unknown | null) => Promise<Data>,
  retry: boolean | number = false,
) => {
  const query = useQuery<Data>({
    queryKey: keys,
    queryFn: queryFunction,
    retry,
    enabled: true,
  });
  return query;
};
