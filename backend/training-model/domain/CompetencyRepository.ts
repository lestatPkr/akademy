import { Repository } from "../../shared/domain/Repository";
import { Competency } from "./Competency";

export interface CompetencyRepository extends Repository<Competency> {
  findByPrincipleId(principleId: string): Promise<Competency[]>;
  findByGameModelId(gameModelId: string): Promise<Competency[]>;
}