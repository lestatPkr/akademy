import { CosmosDBRepository } from "../../shared/infrastructure/CosmosDBRepository";
import { TrainingExercise } from "../../training-model/domain/TrainingExercise";
import { TrainingExerciseRepository } from "../../training-model/domain/TrainingExerciseRepository";

export class CosmosDBTrainingExerciseRepository extends CosmosDBRepository<TrainingExercise> implements TrainingExerciseRepository {
  constructor() {
    super("training_exercises");
  }

  async findByGameModelId(gameModelId: string): Promise<TrainingExercise[]> {
    const querySpec = {
      query: "SELECT * FROM c WHERE c.game_model_id = @gameModelId",
      parameters: [{ name: "@gameModelId", value: gameModelId }]
    };
    const { resources } = await this.container.items.query(querySpec).fetchAll();
    return resources as TrainingExercise[];
  }
}