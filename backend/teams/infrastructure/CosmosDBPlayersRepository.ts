import { CosmosDBRepository } from "@/backend/shared/infrastructure/CosmosDBRepository";
import { Player } from "../domain/Player";

export class CosmosDBPlayersRepository extends CosmosDBRepository<Player> {
  constructor() {
    super("players");
  }

  // Add any player-specific methods here if needed
}