import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { EventsService, Event } from './events.service';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  // Create a new event
  @Post()
  create(@Body() createEventDto: { title: string; date: string; time: string; description: string; attachments: string[] }): Event {
    return this.eventsService.create(createEventDto);
  }

  // Get all events
  @Get()
  findAll(): Event[] {
    return this.eventsService.findAll();
  }

  // Get a single event by ID
  @Get(':id')
  findOne(@Param('id') id: string): Event {
    return this.eventsService.findOne(Number(id));
  }

  // Update an event by ID
  @Put(':id')
  update(@Param('id') id: string, @Body() updateEventDto: Partial<{ title: string; date: string; time: string; description: string; attachments: string[] }>): Event {
    return this.eventsService.update(Number(id), updateEventDto);
  }

  // Delete an event by ID
  @Delete(':id')
  delete(@Param('id') id: string): boolean {
    return this.eventsService.delete(Number(id));
  }
}
