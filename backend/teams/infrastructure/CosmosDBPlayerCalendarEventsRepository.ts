import { PlayerCalendarEvent } from "../domain/PlayerCalendarEvent";
import { CosmosDBRepository } from "@/backend/shared/infrastructure/CosmosDBRepository";
import { PlayerCalendarEventRepository } from "../domain/PlayerCalendarEventsRepository";

export class CosmosDBPlayerCalendarEventsRepository extends CosmosDBRepository<PlayerCalendarEvent> implements PlayerCalendarEventRepository {
    constructor() {
        super("player_calendar_events");
    }
}