import { PlayerEvaluation } from "../domain/PlayerEvaluation";
import { CosmosDBRepository } from "@/backend/shared/infrastructure/CosmosDBRepository";

export class CosmosDBPlayerEvaluationsRepository extends CosmosDBRepository<PlayerEvaluation> {
  constructor() {
    super("player_evaluations");
  }

  // Add any players evaluation-specific methods here if needed
}