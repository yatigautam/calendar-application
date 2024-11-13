import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsModule } from './events/events.module';  // Import EventsModule here

@Module({
  imports: [EventsModule],  // Add EventsModule to imports
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
