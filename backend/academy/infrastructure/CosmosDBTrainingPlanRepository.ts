import { CosmosDBRepository } from "../../shared/infrastructure/CosmosDBRepository";
import { TrainingPlan } from "../../training-model/domain/TrainingPlan";
import { TrainingPlanRepository } from "../../training-model/domain/TrainingPlanRepository";

export class CosmosDBTrainingPlanRepository extends CosmosDBRepository<TrainingPlan> implements TrainingPlanRepository {
  constructor() {
    super("training_plans");
  }

  async findByTeamId(teamId: string): Promise<TrainingPlan[]> {
    const querySpec = {
      query: "SELECT * FROM c WHERE c.team_id = @teamId",
      parameters: [{ name: "@teamId", value: teamId }]
    };
    const { resources } = await this.container.items.query(querySpec).fetchAll();
    return resources as TrainingPlan[];
  }

  async findByStatus(status: TrainingPlan['status']): Promise<TrainingPlan[]> {
    const querySpec = {
      query: "SELECT * FROM c WHERE c.status = @status",
      parameters: [{ name: "@status", value: status }]
    };
    const { resources } = await this.container.items.query(querySpec).fetchAll();
    return resources as TrainingPlan[];
  }
}