import { useMutation } from '@tanstack/react-query';
import { useAPIService } from '../../api';
import { Game } from '../types';

type RollSlotsParams = {
  onSuccess?: (game: Game) => void;
  onError?: (error: Error) => void;
};

export const useRollSlots = ({ onSuccess, onError }: RollSlotsParams) => {
  const api = useAPIService();

  return useMutation<Game, Error, string>({
    mutationFn: async (gameId: string) => {
      return await api.gameControllerRollSlots({ gameId });
    },
    onSuccess: (game) => {
      onSuccess?.(game);
    },
    onError: (error) => {
      onError?.(error);
    },
  });
};
