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

  @Post(':id/roll')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Roll the slots in a game' })
  @ApiParam({
    name: 'id',
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
  async rollSlots(@Param('id', ParseUUIDPipe) id: string): Promise<GameResponseDto> {
    const game = await this.gameService.rollSlots(id);
    return this.mapToDTO(game);
  }

  @Post(':id/cashout')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Cash out and complete the game' })
  @ApiParam({
    name: 'id',
    description: 'The unique identifier of the game',
    type: 'string',
    format: 'uuid',
  })
  @ApiResponse({
    status: 200,
    description: 'Game cashed out successfully',
    type: GameResponseDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Game not found',
  })
  @ApiResponse({
    status: 409,
    description: 'Game has already been completed',
  })
  async cashoutGame(@Param('id', ParseUUIDPipe) id: string): Promise<GameResponseDto> {
    const game = await this.gameService.cashout(id);
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
