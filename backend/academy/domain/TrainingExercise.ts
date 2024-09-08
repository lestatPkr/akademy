import { Entity } from "../../shared/domain";

export class TrainingExercise extends Entity {
    constructor(
        public name: string,
        public development: string,
        public type: string,
        public zone: string,
        public playersNumber: number,
        public surface: string,
        public goals: string,
        public observable_behaviors: string,
        public variations: string,
        public trainingModelId: string,
        public mainCompetencyId: string,
        public mainCompetencyName: string,
        public secondaryCompetencyIds: string[],
        public secondaryCompetencyNames: string,
        public duration: number,
        public observations: string,
        public multimedia: string
    ) {
        super();
    }
}