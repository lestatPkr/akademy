import { CosmosDBRepository } from "../../shared/infrastructure/CosmosDBRepository";
import { TeamCalendarEvent } from "../domain/TeamCalendarEvent";
import { TeamCalendarEventRepository } from "../domain/TeamCalendarEventRepository";

export class CosmosDBTeamsCalendarEventsRepository extends CosmosDBRepository<TeamCalendarEvent> implements TeamCalendarEventRepository {
  constructor() {
    super("teams_calendar_events");

  }

  async findByTeamId(teamId: string): Promise<TeamCalendarEvent[]> {
    const querySpec = {
      query: "SELECT * FROM c WHERE c.team_id = @teamId",
      parameters: [{ name: "@teamId", value: teamId }]
    };
    const { resources } = await this.container.items.query(querySpec).fetchAll();
    return resources as TeamCalendarEvent[];
  }
}