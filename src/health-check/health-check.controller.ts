import { Controller, Get } from '@nestjs/common';

@Controller()
export class HealthCheckController {
  @Get('health-check')
  healthCheck(): { success: boolean } {
    return { success: true };
  }
}
