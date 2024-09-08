import { PlayerEvaluationRecord } from "../domain/PlayerEvaluationRecord";
import { CosmosDBRepository } from "@/backend/shared/infrastructure/CosmosDBRepository";

export class CosmosDBPlayerEvaluationRecordRepository extends CosmosDBRepository<PlayerEvaluationRecord> {
  constructor() {
    super("player_evaluation_records");
  }

  // Add any player evaluation record-specific methods here if needed
}