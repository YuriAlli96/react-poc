import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { Routes } from "./roots.config";

const queryClient = new QueryClient();

export const Root = () => (
  <QueryClientProvider client={queryClient}>
    <Routes />
  </QueryClientProvider>
);
