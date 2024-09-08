import { z } from 'zod';
import { Entity } from "@/backend/shared/domain/Entity";
import { PlayerEvaluationRecord } from './PlayerEvaluationRecord';

interface CompetencyScore {
    skillId: string;
    skillName: string;
    averageScore: number;
    attributeScores: {
        attributeId: string;
        score: number;
    }[];
}

export class PlayerPerformance extends Entity {
    playerId: string;
    categoryId: string;
    type: "current" | "expected";
    scores: CompetencyScore[];

    constructor(playerId: string, categoryId: string, type: "current" | "expected", scores: CompetencyScore[]) {
        super();
        this.playerId = playerId;
        this.categoryId = categoryId;
        this.type = type;
        this.scores = scores;
    }

    updateScores(evaluationRecord: PlayerEvaluationRecord) {
        evaluationRecord.scores.forEach(score => {
            const attributeScore = this.scores.find(s => s.attributeScores.find(a => a.attributeId === score.attributeId));
            if (attributeScore) {
                const attribute = attributeScore.attributeScores.find(a => a.attributeId === score.attributeId);
                if (attribute) {
                    attribute.score = score.score;
                }
            }
        });
        this.scores.forEach(score => {
            score.averageScore = score.attributeScores.reduce((acc, curr) => acc + curr.score, 0) / score.attributeScores.length;
        }); 
    }
}
