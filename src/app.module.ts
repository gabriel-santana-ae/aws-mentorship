import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HealthCheckController } from './health-check/health-check.controller';
import { DataBaseModule } from './database/database.module';
import { QuotesModule } from './modules/quotes/quotes.module';
@Module({
  imports: [ConfigModule.forRoot(), DataBaseModule, QuotesModule],
  controllers: [HealthCheckController],
  providers: [],
})
export class AppModule {}
