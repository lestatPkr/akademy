import { Repository } from "../../shared/domain/Repository";
import { PlayerTrainingExercise } from "./PlayerTrainingExercise";

export interface PlayerTrainingExerciseRepository extends Repository<PlayerTrainingExercise> {
  findByGameModelId(gameModelId: string): Promise<PlayerTrainingExercise[]>;
}