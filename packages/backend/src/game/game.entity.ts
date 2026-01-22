import { GameBusinessRuleException } from './game.exceptions';

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

const ROLL_COST = 1;

const SLOT_REWARDS: Record<GameSlot, number> = {
  [GameSlot.X]: 0,

  [GameSlot.C]: 10, // Cherry
  [GameSlot.L]: 20, // Lemon
  [GameSlot.O]: 30, // Orange
  [GameSlot.W]: 40, // Watermelon
};

export class GameEntity {
  id?: string;
  status: GameStatus;
  credits: number;
  slots: GameSlot[];

  constructor(props: { id?: string; status: GameStatus; slots: GameSlot[]; credits: number }) {
    Object.assign(this, props);
  }

  static createNewGame() {
    return new GameEntity({
      id: undefined,
      status: GameStatus.Started,
      credits: 10,
      slots: [GameSlot.X, GameSlot.X, GameSlot.X],
    });
  }

  pullSlots() {
    if (this.credits < ROLL_COST) {
      throw new GameBusinessRuleException('Insufficient credits to play');
    }

    this.slots = this.getRandomSlots();
    const isWin = this.isWin();

    if (isWin) {
      const rewards = SLOT_REWARDS[this.slots[0]];
      this.credits = this.credits + rewards;
    } else {
      this.credits = this.credits - 1;
      this.status = this.credits === 0 ? GameStatus.Completed : GameStatus.Started;
    }
  }

  private isWin(): boolean {
    return this.slots.every((slot) => slot === this.slots[0]);
  }

  private getRandomSlots(): GameSlot[] {
    return [this.getRandomSlotValue(), this.getRandomSlotValue(), this.getRandomSlotValue()];
  }

  private getRandomSlotValue(): GameSlot {
    const r = Math.random();

    if (r < 0.25) return GameSlot.C;
    if (r < 0.5) return GameSlot.L;
    if (r < 0.75) return GameSlot.O;
    return GameSlot.W;
  }
}
