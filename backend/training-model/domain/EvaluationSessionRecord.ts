
export type BehaviorScore = {
    behaviorId: string;
    score: number | boolean | null;
};

export class EvaluationSessionRecord {
    constructor(
        public id: string,
        public playerId: string,
        public evaluationSessionId: string,
        public evaluationDate: string,
        public scores: BehaviorScore[]
    ) { }
}