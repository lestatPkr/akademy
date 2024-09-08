import { Entity } from "../../shared/domain";

export default class Principle extends Entity { 
    constructor(
        public name: string,
        public description: string
    ) {
        super();
    }
}