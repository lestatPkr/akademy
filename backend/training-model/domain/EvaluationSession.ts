import { Entity } from "../../shared/domain";

export class EvaluationSession extends Entity {
    constructor(
        public template_id: string,
        public start_time: string,
        public end_time: string,
        public team_id: string,
        public status: "scheduled" | "in_progress" | "finished" | "cancelled" = "scheduled",
        public evaluation_records: EvaluationRecord[] = []
    ) {
        super();
    }

    addEvaluationRecord(record: EvaluationRecord) {
        this.evaluation_records.push(record);
    }
}

export interface EvaluationRecord {
    player_id: string;
    behavior_id: string;
    score: number;
}