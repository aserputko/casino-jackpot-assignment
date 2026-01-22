import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GameModule } from './game/game.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    GameModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
