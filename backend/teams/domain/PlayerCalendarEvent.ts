import { Entity } from "@/backend/shared/domain/Entity";

export class PlayerCalendarEvent extends Entity {
    public readonly title: string;
    public readonly description: string;
    public date: string;
    public startTime: string;
    public endTime: string;
    public readonly playerId: string;
    
    constructor(
        title: string,
        description: string,
        date: string,
        startTime: string,
        endTime: string,
        playerId: string,
    ) {
        super();    
        this.title = title;
        this.description = description;
        this.date = date;
        this.startTime = startTime;
        this.endTime = endTime;
        this.playerId = playerId;
    }
}