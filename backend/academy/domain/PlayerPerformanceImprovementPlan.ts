import { Entity } from "@/backend/shared/domain/Entity";
import { PlayerPerformance } from "./PlayerPerformance";
import { PlayerEvaluation } from "./PlayerEvaluation";
interface PlayerPerformanceImprovementPlanGoals {
    perfomanceGoal: PlayerPerformance;
    description: string;
    evaluationDate: string;
    trainingPlanId: string;
}
export class PlayerPerformanceImprovementPlan extends Entity {
    playerId: string;
    description: string;
    goals: PlayerPerformanceImprovementPlanGoals[];
    evaluations: PlayerEvaluation[];
    actions: string[];
    resources: string[];
    status: "inProgress" | "completed" | "notStarted";
    constructor(playerId: string, description: string, milestones: PlayerPerformanceImprovementPlanGoals[], evaluations: PlayerEvaluation[], actions: string[], resources: string[], status: "inProgress" | "completed" | "notStarted") {
        super();
        this.playerId = playerId;
        this.description = description;
        this.goals = milestones;
        this.evaluations = evaluations;
        this.actions = actions;
        this.resources = resources;
        this.status = status;
    }
}   