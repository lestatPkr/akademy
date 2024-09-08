import { TeamCalendarEvent } from "../../domain/TeamCalendarEvent";
import { TeamCalendarEventRepository } from "../../domain/TeamCalendarEventRepository";

export const getCalendar = async (teamId: string, calendarEventRepository: TeamCalendarEventRepository): Promise<TeamCalendarEvent[]> => {
    const calendarEvents = await calendarEventRepository.findByTeamId(teamId);
    return calendarEvents;
};