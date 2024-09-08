import { CosmosDBRepository } from "../../shared/infrastructure/CosmosDBRepository";
import { Team } from "../domain/Team";
import { TeamRepository } from "../domain/TeamRepository";

export class CosmosDBTeamRepository extends CosmosDBRepository<Team> implements TeamRepository {
  constructor() {
    super("teams");
  }

  async findByClubId(clubId: string): Promise<Team[]> {
    const querySpec = {
      query: "SELECT * FROM c WHERE c.club_id = @clubId",
      parameters: [{ name: "@clubId", value: clubId }]
    };
    const { resources } = await this.container.items.query(querySpec).fetchAll();
    return resources as Team[];
  }

  async findBySeasonId(seasonId: string): Promise<Team[]> {
    const querySpec = {
      query: "SELECT * FROM c WHERE c.season_id = @seasonId",
      parameters: [{ name: "@seasonId", value: seasonId }]
    };
    const { resources } = await this.container.items.query(querySpec).fetchAll();
    return resources as Team[];
  }
}