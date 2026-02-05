"use client";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';

export default function TanstackProvider({ children }: { children: React.ReactNode }) {
  // Ensure QueryClient is created only once per client lifecycle
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
        queries: {
            // Default stale time of 1 minute to avoid excessive refetching
            staleTime: 60 * 1000, 
            // Optional: Adjust refetch behavior
            refetchOnWindowFocus: false,
        },
    },
  }));

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-right" />
    </QueryClientProvider>
  );
}
