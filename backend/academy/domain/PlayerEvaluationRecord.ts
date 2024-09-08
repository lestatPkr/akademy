import { Entity } from "@/backend/shared/domain/Entity";

export class PlayerEvaluationRecord extends Entity {
    playerId: string;
    evaluationDate: Date;
    evaluationType: "selfAssessment" | "peerAssessment" | "coachAssessment" | "mentorAssessment";
    scores: {
        attributeId: string;
        score: number;
    }[];
    keyStrengths: string;
    areasForImprovement: string;
    type: "cycle" | "match" | "training";

    constructor(playerId: string, evaluationDate: Date, evaluationType: "selfAssessment" | "peerAssessment" | "coachAssessment" | "mentorAssessment", scores: {
        attributeId: string;
        score: number;
    }[], keyStrengths: string, areasForImprovement: string, type: "cycle" | "match" | "training") {
        super();
        this.playerId = playerId;
        this.evaluationDate = evaluationDate;
        this.evaluationType = evaluationType;
        this.scores = scores;
        this.keyStrengths = keyStrengths;
        this.areasForImprovement = areasForImprovement;
        this.type = type;
    }   
}