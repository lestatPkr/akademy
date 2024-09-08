import { PlayerPerformanceImprovementPlan } from "../domain/PlayerPerformanceImprovementPlan";
import { CosmosDBRepository } from "@/backend/shared/infrastructure/CosmosDBRepository";

export class CosmosDBPlayerPerformanceImprovementPlanRepository extends CosmosDBRepository<PlayerPerformanceImprovementPlan> {
  constructor() {
    super("player_performance_improvement_plans");
  }

  // Add any player performance improvement plan-specific methods here if needed
}