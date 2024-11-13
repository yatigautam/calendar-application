import { Injectable, NotFoundException } from '@nestjs/common';

export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  description: string;
  attachments: string[];
}

@Injectable()
export class EventsService {
  private events: Event[] = [];
  private idCounter = 1; // To assign unique IDs to events

  // Create an event
  create(eventData: Omit<Event, 'id'>): Event {
    const newEvent = { id: this.idCounter++, ...eventData };
    this.events.push(newEvent);
    return newEvent;
  }

  // Get all events
  findAll(): Event[] {
    return this.events;
  }

  // Find an event by ID
  findOne(id: number): Event {
    const event = this.events.find(event => event.id === id);
    if (!event) {
      throw new NotFoundException(`Event with ID ${id} not found`);
    }
    return event;
  }

  // Update an event
  update(id: number, updateData: Partial<Omit<Event, 'id'>>): Event {
    const eventIndex = this.events.findIndex(event => event.id === id);
    if (eventIndex === -1) {
      throw new NotFoundException(`Event with ID ${id} not found`);
    }
    this.events[eventIndex] = { ...this.events[eventIndex], ...updateData };
    return this.events[eventIndex];
  }

  // Delete an event
  delete(id: number): boolean {
    const eventIndex = this.events.findIndex(event => event.id === id);
    if (eventIndex === -1) {
      throw new NotFoundException(`Event with ID ${id} not found`);
    }
    this.events.splice(eventIndex, 1);
    return true;
  }
}
