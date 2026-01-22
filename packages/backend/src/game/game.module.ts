import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { GameController } from './game.controller';
import { GameRepository } from './game.repository';
import { GameService } from './game.service';

@Module({
  controllers: [GameController],
  providers: [GameService, GameRepository, PrismaService],
})
export class GameModule {}
