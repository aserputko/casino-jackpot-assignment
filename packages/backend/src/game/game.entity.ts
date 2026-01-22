export enum GameStatus {
  Started = 'Started',
  Completed = 'Completed',
}

export enum GameSlot {
  X = 'X',
  C = 'C',
  L = 'L',
  O = 'O',
  W = 'W',
}

export type Game = {
  id?: string;
  status: GameStatus;
  slots: GameSlot[];
  credits: number;
};

export class GameEntity {
  createGame(): Omit<Game, 'id'> {
    return {
      status: GameStatus.Started,
      credits: 10, // NOTE: it can be configurable
      slots: [GameSlot.X, GameSlot.X, GameSlot.X],
    };
  }
}
