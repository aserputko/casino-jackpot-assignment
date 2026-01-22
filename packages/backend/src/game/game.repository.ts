import { Injectable } from '@nestjs/common';
import { Game as GamePrisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { GameEntity, GameSlot, GameStatus } from './game.entity';

@Injectable()
export class GameRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(payload: GameEntity): Promise<GameEntity> {
    const result = await this.prisma.game.create({
      data: payload,
    });

    return this.mapToEntity(result);
  }

  async findById(id: string): Promise<GameEntity | null> {
    const result = await this.prisma.game.findUnique({
      where: { id },
    });

    if (!result) {
      return null;
    }

    return this.mapToEntity(result);
  }

  async update(id: string, payload: GameEntity): Promise<GameEntity> {
    const result = await this.prisma.game.update({
      where: { id },
      data: payload,
    });

    return this.mapToEntity(result);
  }

  //   async updateGameState(
  //     id: string,
  //     slots: string[],
  //     credits: number,
  //     status?: GameStatus,
  //   ): Promise<Game> {
  //     return this.prisma.game.update({
  //       where: { id },
  //       data: {
  //         slots,
  //         credits,
  //         ...(status && { status }),
  //       },
  //     });
  //   }

  private mapToEntity(data: GamePrisma): GameEntity {
    return new GameEntity({
      id: data.id,
      status: data.status as GameStatus,
      credits: data.credits,
      slots: data.slots as GameSlot[],
    });
  }
}
