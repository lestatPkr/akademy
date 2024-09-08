import { Repository } from "../../shared/domain/Repository";
import { PlayerTrainingPlan } from "./PlayerTrainingPlan";
export interface PlayerTrainingPlanRepository extends Repository<PlayerTrainingPlan> {
  findByPlayerId(playerId: string): Promise<PlayerTrainingPlan[]>;
  findByStatus(status: PlayerTrainingPlan['status']): Promise<PlayerTrainingPlan[]>;
}