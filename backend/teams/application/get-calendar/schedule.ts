import { TeamCalendarEvent } from "../../domain/TeamCalendarEvent";
import { TeamCalendarEventRepository } from "../../domain/TeamCalendarEventRepository";
export interface CalendarEventDTO {
  id: string;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  date: string;
  teamId: string;
  sessionId: string;
  type: 'training' | 'game' | 'other';
}
export interface ScheduleDTO {
  teamId: string;
  events: CalendarEventDTO[];
}
export async function schedule(
  calendarEventRepository: TeamCalendarEventRepository,
  teamId: string,
  events: CalendarEventDTO[]
): Promise<void> {
  const calendarEvents = events.map(event => new TeamCalendarEvent(
    event.title,
    event.description,
    event.date,
    event.startTime,
    event.endTime,
    teamId,
    event.type,
    event.sessionId
  ));

  await calendarEventRepository.saveMany(calendarEvents);
}