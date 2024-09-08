import { EvaluationSession } from "./EvaluationSession";

export interface EvaluationSessionRepository {
    save(evaluationSession: EvaluationSession): Promise<void>;
    get(id: string): Promise<EvaluationSession | null>;
    getByTeamId(teamId: string): Promise<EvaluationSession[]>;
    delete(id: string): Promise<void>;
}
