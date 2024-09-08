import { CosmosDBRepository } from "../../shared/infrastructure/CosmosDBRepository";
import Principle from "../../training-model/domain/Principle";
import { PrincipleRepository } from "../../training-model/domain/PrincipleRepository";

export class CosmosDBPrincipleRepository extends CosmosDBRepository<Principle> implements PrincipleRepository {
  constructor() {
    super("principles");
  }

  async findByGameModelId(gameModelId: string): Promise<Principle[]> {
    const querySpec = {
      query: "SELECT * FROM c WHERE c.gameModelId = @gameModelId",
      parameters: [{ name: "@gameModelId", value: gameModelId }]
    };
    const { resources } = await this.container.items.query(querySpec).fetchAll();
    return resources as Principle[];
  }

  async findByIds(ids: string[]): Promise<Principle[]> {
    const querySpec = {
      query: "SELECT * FROM c WHERE ARRAY_CONTAINS(@ids, c.id)",
      parameters: [{ name: "@ids", value: ids }]
    };
    const { resources } = await this.container.items.query(querySpec).fetchAll();
    return resources as Principle[];
  }


}