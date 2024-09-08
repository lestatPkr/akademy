import { Repository } from "../../shared/domain/Repository";
import { TrainingPlan } from "./TrainingPlan";

export interface TrainingPlanRepository extends Repository<TrainingPlan> {
  findByTeamId(teamId: string): Promise<TrainingPlan[]>;
  findByStatus(status: TrainingPlan['status']): Promise<TrainingPlan[]>;
}