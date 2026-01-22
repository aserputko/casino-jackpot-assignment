import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useAPIService } from '../../api';
import type { GameResponseDto } from '../../api/generated/models';
import { queryKeys } from '../../lib/query';

export const useCreateGame = (onSuccess?: (game: GameResponseDto) => void) => {
  const queryClient = useQueryClient();
  const api = useAPIService();

  return useMutation<GameResponseDto, Error, void>({
    mutationFn: async () => {
      return await api.gameControllerStartGame();
    },
    onSuccess: (newGame) => {
      if (onSuccess) {
        onSuccess(newGame);
      }
      // Invalidate and refetch games list
      queryClient.invalidateQueries({ queryKey: queryKeys.games });

      // Optionally, add the new game to the cache
      queryClient.setQueryData(queryKeys.game(newGame.id), newGame);
    },
    onError: (error) => {
      console.error('Failed to create game:', error);
    },
  });
};
