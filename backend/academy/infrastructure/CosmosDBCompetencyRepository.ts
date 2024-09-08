import { CosmosDBRepository } from "../../shared/infrastructure/CosmosDBRepository";
import { Competency } from "../../training-model/domain/Competency";
import { CompetencyRepository } from "../../training-model/domain/CompetencyRepository";

export class CosmosDBCompetencyRepository extends CosmosDBRepository<Competency> implements CompetencyRepository {
  constructor() {
    super("competencies");
  }

  async findByPrincipleId(principleId: string): Promise<Competency[]> {
    const querySpec = {
      query: "SELECT * FROM c WHERE c.principleId = @principleId",
      parameters: [{ name: "@principleId", value: principleId }]
    };
    const { resources } = await this.container.items.query(querySpec).fetchAll();
    return resources as Competency[];
  }

  async findByGameModelId(gameModelId: string): Promise<Competency[]> {
    const querySpec = {
      query: "SELECT * FROM c WHERE c.gameModelId = @gameModelId",
      parameters: [{ name: "@gameModelId", value: gameModelId }]
    };
    const { resources } = await this.container.items.query(querySpec).fetchAll();
    return resources as Competency[];
  }
}