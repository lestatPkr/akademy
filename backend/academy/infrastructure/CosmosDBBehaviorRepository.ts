import { CosmosDBRepository } from "../../shared/infrastructure/CosmosDBRepository";
import Behavior from "../../training-model/domain/Behavior";
import { BehaviorRepository } from "../../training-model/domain/BehaviorRepository";

export class CosmosDBBehaviorRepository extends CosmosDBRepository<Behavior> implements BehaviorRepository {
  constructor() {
    super("behaviors");
  }

  async findByCompetencyId(competencyId: string): Promise<Behavior[]> {
    const querySpec = {
      query: "SELECT * FROM c WHERE c.competenceId = @competencyId",
      parameters: [{ name: "@competencyId", value: competencyId }]
    };
    const { resources } = await this.container.items.query(querySpec).fetchAll();
    return resources as Behavior[];
  }
}