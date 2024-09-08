import { Entity } from "@/backend/shared/domain/Entity";

export class TeamCalendarEvent extends Entity {
    public readonly title: string;
    public readonly description: string;
    public date: string;
    public startTime: string;
    public endTime: string;
    public readonly teamId: string;
    public readonly sessionId: string;
    public readonly type: "training" | "game" | "other";

    constructor(
        title: string,
        description: string,
        date: string,
        startTime: string,
        endTime: string,
        teamId: string,
        type: "training" | "game" | "other",
        sessionId: string,
    ) {
        super();
        this.title = title;
        this.description = description;
        this.date = date;
        this.startTime = startTime;
        this.endTime = endTime;
        this.teamId = teamId;
        this.type = type;
        this.sessionId = sessionId;
    }
}