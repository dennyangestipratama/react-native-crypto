import { QueryClient, QueryClientProvider } from "react-query";
import { NavigationContainer } from "@react-navigation/native";

import BottomNavigation from "./src/navigation/BottomNavigation";

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 2 } },
});
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <BottomNavigation />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
