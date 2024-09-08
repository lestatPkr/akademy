import { Repository } from "../../shared/domain/Repository";
import { TrainingExercise } from "./TrainingExercise";

export interface TrainingExerciseRepository extends Repository<TrainingExercise> {
  findByGameModelId(gameModelId: string): Promise<TrainingExercise[]>;
}