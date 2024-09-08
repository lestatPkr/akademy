import { Repository } from "../../shared/domain/Repository";
import Principle from "./Principle";

export interface PrincipleRepository extends Repository<Principle> {
  findByGameModelId(gameModelId: string): Promise<Principle[]>;
  findByIds(ids: string[]): Promise<Principle[]>;
}