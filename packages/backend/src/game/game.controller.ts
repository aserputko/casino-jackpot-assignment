import { Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GameResponseDto } from './dto/game-response.dto';
import { GameService } from './game.service';

@ApiTags('Games')
@Controller('games')
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
    return this.gameService.startGame();
  }
}
