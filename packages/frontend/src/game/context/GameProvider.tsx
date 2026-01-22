import { createContext, ReactNode, useContext, useState } from 'react';
import { Game } from '../types';

interface GameContextType {
  game: Game | null;
  setGame: (game: Game | null) => void;
  updateGame: (updatedGame: Game) => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const useGameContext = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGameContext must be used within a GameProvider');
  }
  return context;
};

interface GameProviderProps {
  children: ReactNode;
}

export const GameProvider = ({ children }: GameProviderProps) => {
  const [game, setGame] = useState<Game | null>(null);

  const updateGame = (updatedGame: Game) => {
    setGame(updatedGame);
  };

  const value: GameContextType = {
    game,
    setGame,
    updateGame,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};