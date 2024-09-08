import { Entity } from "@/backend/shared/domain/Entity";

export interface PerformanceExpectation {
    position: string;
    competencyLevel: string;
    expectedPerformance: {
        skill: string;
        skillId: string;
        value: number;
    }
}

export class CategoryLadder extends Entity {
    name: string;
    description: string;
    performanceExpectations: PerformanceExpectation[];

    constructor(name: string, description: string, performanceExpectations: PerformanceExpectation[]) {
        super();
        this.name = name;
        this.description = description;
        this.performanceExpectations = performanceExpectations;
    }
}