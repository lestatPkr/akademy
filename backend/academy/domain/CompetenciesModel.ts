import { Entity } from "@/backend/shared/domain/Entity";


export class Skill {
    id: number;
    name: string;
    description: string;
    attributes: Attribute[];

    constructor(
        id: number,
        name: string,
        description: string,
        attributes: Attribute[],

    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.attributes = attributes;
    }
}

export class Attribute {
    id: number;
    name: string;

    constructor(id: number, name: string, value: number) {
        this.id = id;
        this.name = name;
    }
}

export class CompetenciesModel extends Entity {
    name: string;
    description: string;
    skills: Skill[];

    constructor(name: string, description: string, skills: Skill[]) {
        super();
        this.name = name;
        this.description = description;
        this.skills = skills;
    }
}