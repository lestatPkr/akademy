import { CompetenciesModel } from "../domain/CompetenciesModel";
import { CosmosDBRepository } from "@/backend/shared/infrastructure/CosmosDBRepository";

export class CompetenciesModelRepository extends CosmosDBRepository<CompetenciesModel> {
  constructor() {
    super("competencies_models");
  }

  // Add any competencies model-specific methods here if needed
}