import { PlayerPerformance } from "../domain/PlayerPerformance";
import { CosmosDBRepository } from "@/backend/shared/infrastructure/CosmosDBRepository";
import { SqlQuerySpec } from "@azure/cosmos";

export class CosmosDBPlayerPerformanceRepository extends CosmosDBRepository<PlayerPerformance> {
  constructor() {
    super("players_performance");
  }

  async findByPlayerAndCategory(playerId: string, categoryId: string): Promise<PlayerPerformance[]> {
    const querySpec: SqlQuerySpec = {
      query: "SELECT * FROM c WHERE c.playerId = @playerId AND c.categoryId = @categoryId",
      parameters: [
        { name: "@playerId", value: playerId },
        { name: "@categoryId", value: categoryId }
      ]
    };
    return this.query(querySpec);
  }
}