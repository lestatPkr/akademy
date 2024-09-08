import { CosmosDBRepository } from "../../shared/infrastructure/CosmosDBRepository";
import { TrainingModel } from "../../training-model/domain/TrainingModel";
import { TrainingModelRepository } from "../../training-model/domain/TrainingModelRepository";

export class CosmosDBTrainingModelRepository extends CosmosDBRepository<TrainingModel> implements TrainingModelRepository {
  constructor() {
    super("training_models");
  }

  async findByName(name: string): Promise<TrainingModel | null> {
    const querySpec = {
      query: "SELECT * FROM c WHERE c.name = @name",
      parameters: [{ name: "@name", value: name }]
    };
    const { resources } = await this.container.items.query(querySpec).fetchAll();
    return resources[0] as TrainingModel | null;
  }
}