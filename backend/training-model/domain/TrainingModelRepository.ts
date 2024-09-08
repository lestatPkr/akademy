import { Repository } from "../../shared/domain/Repository";
import { TrainingModel } from "./TrainingModel";

export interface TrainingModelRepository extends Repository<TrainingModel> {
  findByName(name: string): Promise<TrainingModel | null>;
}