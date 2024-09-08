import { Repository } from "@/backend/shared/domain";
import { TeamCalendarEvent } from "./TeamCalendarEvent";

export interface TeamCalendarEventRepository extends Repository<TeamCalendarEvent> {
    findByTeamId(teamId: string): Promise<TeamCalendarEvent[]>;

}
