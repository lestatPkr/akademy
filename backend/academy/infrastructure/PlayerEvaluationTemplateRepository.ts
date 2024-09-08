import { PlayerEvaluationTemplate } from "../domain/PlayerEvaluationTemplate";
import { CosmosDBRepository } from "@/backend/shared/infrastructure/CosmosDBRepository";

export class PlayerEvaluationTemplateRepository extends CosmosDBRepository<PlayerEvaluationTemplate> {
  constructor() {
    super("player_evaluation_templates");
  }

  // Add any player evaluation template-specific methods here if needed
}