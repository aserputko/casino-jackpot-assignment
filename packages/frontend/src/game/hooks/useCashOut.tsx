import { useMutation } from '@tanstack/react-query';
import { useAPIService } from '../../api';
import { Game } from '../types';

type CashOutParams = {
  onSuccess?: (game: Game) => void;
  onError?: (error: Error) => void;
};

export const useCashOut = ({ onSuccess, onError }: CashOutParams) => {
  const api = useAPIService();

  return useMutation<Game, Error, string>({
    mutationFn: async (id: string) => {
      return await api.gameControllerCashoutGame({ id });
    },
    onSuccess: (game) => {
      onSuccess?.(game);
    },
    onError: (error) => {
      onError?.(error);
    },
  });
};
