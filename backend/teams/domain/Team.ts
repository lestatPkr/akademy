import { Category } from '@/backend/academy/domain/Category';
import { Entity } from '../../shared/domain/Entity';
import { TeamCalendarEvent } from './TeamCalendarEvent';




export class Team extends Entity {
    public readonly name: string;
    public readonly shieldUrl: string;
    public readonly categoryId: string;
    public readonly competencyLevel: string;


    constructor(
        name: string,
        shieldUrl: string,
        categoryId: string,
        competencyLevel: string,
    ) {
        super();
        this.name = name;
        this.shieldUrl = shieldUrl;
        this.categoryId = categoryId;
        this.competencyLevel = competencyLevel;
    }
}
