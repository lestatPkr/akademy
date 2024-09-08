import { Entity } from "../../shared/domain";

export default class Behavior extends Entity {
    constructor(
        public competenceId: string,
        public competence: string,
        public name: string,
        public categories: string[],
        public evaluation: "Scale" | "Likert" | "Boolean",
        public description: string
    ) {
        super();
    }

    // Add other methods as needed
}