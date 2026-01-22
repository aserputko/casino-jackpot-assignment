import { QueryClient } from '@tanstack/react-query';

export const queryKeys = {
  // Game related queries
  games: ['games'] as const,
  game: (id: string) => ['games', id] as const,
  gameResults: (gameId: string) => ['games', gameId, 'results'] as const,
};

export const createQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000, // 5 minutes
        retry: 1,
        refetchOnWindowFocus: false,
      },
      mutations: {
        onError: (error) => {
          console.error('Mutation error:', error);
          // You can add global error handling here
        },
      },
    },
  });

// Error boundary for React Query
export const queryClientConfig = {
  defaultOptions: {
    queries: {
      // Prevent React Query from retrying failed requests
      retry: (failureCount: number, error: any) => {
        // Don't retry for 4xx errors
        if (error?.status >= 400 && error?.status < 500) {
          return false;
        }
        return failureCount < 3;
      },
      // Configure stale time globally
      staleTime: 5 * 60 * 1000,
    },
  },
};
