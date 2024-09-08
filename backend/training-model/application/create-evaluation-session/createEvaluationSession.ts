import { z } from "zod";
import { EvaluationSession } from "../../domain/EvaluationSession";
import { EvaluationSessionRepository } from "../../domain/EvaluationSessionRepository";

// Define the DTO schema for creating an evaluation session
export const CreateEvaluationSessionDTO = z.object({
    template_id: z.string(),
    start_time: z.string().datetime(),
    end_time: z.string().datetime(),
    team_id: z.string(),
});

export type CreateEvaluationSessionDTO = z.infer<typeof CreateEvaluationSessionDTO>;

export async function createEvaluationSession(
    evaluationSessionRepository: EvaluationSessionRepository,
    dto: CreateEvaluationSessionDTO
): Promise<EvaluationSession> {
    // Create a new EvaluationSession instance
    const evaluationSession = new EvaluationSession(
        dto.template_id,
        dto.start_time,
        dto.end_time,
        dto.team_id
    );

    // Save the evaluation session
    await evaluationSessionRepository.save(evaluationSession);

    return evaluationSession;
}
