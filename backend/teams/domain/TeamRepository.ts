import { Repository } from "../../shared/domain/Repository";
import { Team } from "./Team";

export interface TeamRepository extends Repository<Team> {
  // Add any team-specific methods here if needed
  findByClubId(clubId: string): Promise<Team[]>;
  findBySeasonId(seasonId: string): Promise<Team[]>;
}