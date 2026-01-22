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
import { GameResponseDto } from './dto/game-response.dto';
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
    type: GameResponseDto,
  })
  async startGame(): Promise<GameResponseDto> {
    const game = await this.gameService.startGame();
    return this.mapToDTO(game);
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
    type: GameResponseDto,
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
  async rollSlots(@Param('gameId', ParseUUIDPipe) gameId: string): Promise<GameResponseDto> {
    const game = await this.gameService.rollSlots(gameId);
    return this.mapToDTO(game);
  }

  private mapToDTO(entity: GameEntity): GameResponseDto {
    return {
      id: entity.id!,
      status: entity.status,
      credits: entity.credits,
      slots: entity.slots,
    };
  }
}
