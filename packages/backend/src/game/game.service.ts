import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { GameResponseDto } from './dto/game-response.dto';
import { GameEntity } from './game.entity';

@Injectable()
export class GameService {
  private readonly logger = new Logger();

  constructor(private readonly prisma: PrismaService) {}

  async startGame(): Promise<GameResponseDto> {
    this.logger.log('Starting the game');

    const newGame = new GameEntity().createGame();

    const game = await this.prisma.game.create({
      data: newGame,
    });

    return game;
  }
}
