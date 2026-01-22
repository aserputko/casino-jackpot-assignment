import { ApiProperty } from '@nestjs/swagger';
import { GameSlot, GameStatus } from '../game.entity';

export class GameResponseDto {
  @ApiProperty({
    description: 'Unique identifier of the game',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  id: string;

  @ApiProperty({
    description: 'Status of the game',
    enum: GameStatus,
    example: GameStatus.Started,
  })
  status: GameStatus;

  @ApiProperty({
    description: 'Amount of credits',
    example: 10,
  })
  credits: number;

  @ApiProperty({
    description: 'List of slot symbols',
    example: ['C', 'L', 'O'],
    enum: GameSlot,
    isArray: true,
  })
  slots: GameSlot[];

  @ApiProperty({
    description: 'Date when the game was created',
    example: '2024-01-01T00:00:00.000Z',
  })
  createdAt?: Date;

  @ApiProperty({
    description: 'Date when the game was last updated',
    example: '2024-01-01T00:00:00.000Z',
  })
  updatedAt?: Date;
}
