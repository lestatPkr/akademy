import { Entity } from "@/backend/shared/domain/Entity";

export class PlayerEvaluationTemplate extends Entity {
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    
    
    constructor(name: string, description: string, createdAt: Date, updatedAt: Date) {
        super();
        this.name = name;
        this.description = description;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}   