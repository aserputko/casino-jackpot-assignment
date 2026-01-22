import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { GameEntity } from './game.entity';
import { GameRepository } from './game.repository';

@Injectable()
export class GameService {
  private readonly logger = new Logger();

  constructor(private readonly gameRepository: GameRepository) {}

  async startGame(): Promise<GameEntity> {
    this.logger.log('Starting the game');

    const newGame = GameEntity.createNewGame();

    return await this.gameRepository.create(newGame);
  }

  async rollSlots(id: string): Promise<GameEntity> {
    this.logger.log(`Rolling slots for game: ${id}`);

    const game = await this.gameRepository.findById(id);

    if (!game) {
      throw new NotFoundException(`Game with ID ${id} not found`);
    }

    game.pullSlots();

    return await this.gameRepository.update(id, game);
  }
}
