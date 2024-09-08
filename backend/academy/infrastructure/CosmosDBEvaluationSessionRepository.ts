import { EvaluationSessionRepository } from "../../training-model/domain/EvaluationSessionRepository";
import { EvaluationSession } from "../../training-model/domain/EvaluationSession";
import { CosmosDBRepository } from "../../shared/infrastructure/CosmosDBRepository";
import { CosmosClient } from "@azure/cosmos";

export class CosmosDBEvaluationSessionRepository extends CosmosDBRepository<EvaluationSession> implements EvaluationSessionRepository {
    constructor() {
        super("evaluation_sessions");
    }


    async getByTeamId(teamId: string): Promise<EvaluationSession[]> {
        return this.query(
            {
                query: "SELECT * FROM c WHERE c.team_id = @teamId",
                parameters: [{ name: "@teamId", value: teamId }]
            }
        );
    }

}