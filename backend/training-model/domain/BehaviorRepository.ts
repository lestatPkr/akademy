import { Repository } from "../../shared/domain/Repository";
import Behavior from "./Behavior";

export interface BehaviorRepository extends Repository<Behavior> {
  findByCompetencyId(competencyId: string): Promise<Behavior[]>;
}