import { Entity } from "../../shared/domain";

export class PlayerTrainingExercise extends Entity {
    constructor(
        public name: string,
        public development: string,
        public type: string,
        public duration: number,
        public observations: string,
        public multimedia: string
    ) {
        super();
    }
}