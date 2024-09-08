import { Entity } from "../../shared/domain";

export class Competency extends Entity {
    constructor(
        public name: string,
        public description: string,
        public principleId: string,
        public gameModelId: string
    ) {
        super();
    }
}