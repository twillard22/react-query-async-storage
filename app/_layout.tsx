import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import Reactotron from "reactotron-react-native";
import {
  QueryClientManager,
  reactotronReactQuery,
} from "reactotron-react-query";

const queryClient = new QueryClient();
const queryClientManager = new QueryClientManager({
  queryClient,
});
// Some esling config see `use` and thinks it a hook :face_palm:
// eslint-disable-next-line
Reactotron.use(reactotronReactQuery(queryClientManager))
  .configure({
    onDisconnect: () => {
      queryClientManager.unsubscribe();
    },
  })
  .useReactNative()
  .connect();

function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack screenOptions={{ title: "react-query-async-storage" }} />
    </QueryClientProvider>
  );
}

export default RootLayout;
export { queryClient };
