import { z } from "zod";
import { EvaluationSession, EvaluationRecord } from "../../domain/EvaluationSession";
import { EvaluationSessionRepository } from "../../domain/EvaluationSessionRepository";

export const AddEvaluationRecordsDTO = z.object({
    session_id: z.string(),
    records: z.array(z.object({
        player_id: z.string(),
        behavior_id: z.string(),
        score: z.number(),
    })),
});

export type AddEvaluationRecordsDTO = z.infer<typeof AddEvaluationRecordsDTO>;

export async function addEvaluationRecords(
    evaluationSessionRepository: EvaluationSessionRepository,
    dto: AddEvaluationRecordsDTO
): Promise<EvaluationSession> {
    // Retrieve the evaluation session
    const session = await evaluationSessionRepository.get(dto.session_id);
    if (!session) {
        throw new Error("Evaluation session not found");
    }

    // Add evaluation records
    dto.records.forEach(record => {
        session.addEvaluationRecord(record);
    });

    // Update the session status if needed
    if (session.status === "scheduled") {
        session.status = "in_progress";
    }

    // Save the updated session
    await evaluationSessionRepository.save(session);

    return session;
}