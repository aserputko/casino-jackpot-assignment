import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { GameBusinessRuleException } from '../game.exceptions';

@Catch(GameBusinessRuleException)
export class GameBusinessRuleFilter implements ExceptionFilter {
  catch(exception: GameBusinessRuleException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    response.status(HttpStatus.CONFLICT).json({
      statusCode: HttpStatus.CONFLICT,
      timestamp: new Date().toISOString(),
      message: exception.message,
      error: 'Business Rule Violation',
    });
  }
}
