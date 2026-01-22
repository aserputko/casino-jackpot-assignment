import { useMutation } from '@tanstack/react-query';
import { useAPIService } from '../../api';
import { Game } from '../types';

type StartGameParams = {
  onSuccess?: (game: Game) => void;
  onError?: (error: Error) => void;
};

export const useStartGame = ({ onSuccess, onError }: StartGameParams) => {
  const api = useAPIService();

  return useMutation<Game, Error, void>({
    mutationFn: async () => {
      return await api.gameControllerStartGame();
    },
    onSuccess: (game) => {
      onSuccess?.(game);
    },
    onError: (error) => {
      onError?.(error);
    },
  });
};
