import { queryClient } from "@/app/_layout";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useMutation, useQuery } from "@tanstack/react-query";

const useReactQueryAsyncStorageKey = () => {
  return {
    query: useQuery({
      queryKey: ["async-storage-key"],
      queryFn: async (): Promise<string | null> => {
        return new Promise((resolve) => {
          // had to use a timeout so you can actually see the loading state
          setTimeout(() => {
            resolve(AsyncStorage.getItem("async-storage-key"));
          }, 2000);
        });
      },
    }),
    mutation: useMutation({
      mutationKey: ["async-storage-key"],
      mutationFn: async (value?: string) => {
        if (value) {
          return AsyncStorage.setItem("async-storage-key", value);
        }
        return AsyncStorage.removeItem("async-storage-key");
      },
      onSuccess: () => {
        queryClient.refetchQueries({ queryKey: ["async-storage-key"] });
      },
    }),
  };
};

export { useReactQueryAsyncStorageKey };
