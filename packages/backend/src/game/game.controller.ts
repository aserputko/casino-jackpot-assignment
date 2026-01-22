import {
  Controller,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Post,
  UseFilters,
} from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GameBusinessRuleFilter } from './filters/game-business-rule.filter';
import { GameEntity } from './game.entity';
import { GameService } from './game.service';

@ApiTags('Games')
@Controller('games')
@UseFilters(GameBusinessRuleFilter)
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Post('start')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Start a new game' })
  @ApiResponse({
    status: 201,
    description: 'Game created successfully',
    type: GameEntity,
  })
  async startGame(): Promise<GameEntity> {
    return this.gameService.startGame();
  }

  @Post(':gameId/roll')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Roll the slots in a game' })
  @ApiParam({
    name: 'gameId',
    description: 'The unique identifier of the game',
    type: 'string',
    format: 'uuid',
  })
  @ApiResponse({
    status: 200,
    description: 'Slots rolled successfully',
    type: GameEntity,
  })
  @ApiResponse({
    status: 404,
    description: 'Game not found',
  })
  @ApiResponse({
    status: 409,
    description: 'Business rule violation (e.g., insufficient credits)',
  })
  @ApiResponse({
    status: 400,
    description: 'Insufficient credits or game completed',
  })
  async rollSlots(@Param('gameId', ParseUUIDPipe) gameId: string): Promise<GameEntity> {
    return this.gameService.rollSlots(gameId);
  }
}
