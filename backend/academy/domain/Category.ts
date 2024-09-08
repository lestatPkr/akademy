import { Entity } from "@/backend/shared/domain/Entity";

export class Category extends Entity {
    name: string;
    description: string;
    competencyLevels: string[];

    constructor(name: string, description: string, competencyLevels: string[]) {
        super();
        this.name = name;
        this.description = description;
        this.competencyLevels = competencyLevels;
    }
}