import { Entity } from "@/backend/shared/domain/Entity";
import { PlayerEvaluationRecord } from "./PlayerEvaluationRecord";

export class PlayerEvaluation extends Entity {
    evaluationRecords: PlayerEvaluationRecord[];
    type: "cycle" | "match" | "training";

    constructor(evaluationRecords: PlayerEvaluationRecord[], type: "cycle" | "match" | "training") {
        super();
        this.evaluationRecords = evaluationRecords;
        this.type = type;
    }
}