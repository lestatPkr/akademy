import { Entity } from "@/backend/shared/domain";
import { PlayerTrainingSession } from "./PlayerTrainingSession";

export class PlayerTrainingPlan extends Entity {
    public name: string;
    public description: string;
    public durationInWeeks: number;
    public readonly progress: number = 0;
    public start_date: string;
    public readonly status: 'scheduled' | 'in_progress' | 'completed' = 'scheduled';
    public readonly teamId: string = '';
    public readonly sessions: PlayerTrainingSession[] = [];
    public readonly competencies: string[] = [];
    public objectives: string[] = [];

    constructor(
        name: string,
        description: string,
        durationInWeeks: number,
        startDate: string,
        teamId: string
    ) {
        super();
        this.name = name;
        this.description = description;
        this.durationInWeeks = durationInWeeks;
        this.start_date = startDate;
        this.teamId = teamId;
    }

    public addSession(
        name: string,
        exercisesIds: string[],
        exercisesNames: string[],
        totalDuration: number,
        startTime: string,
        endTime: string,
        date: string
    ): void {
        this.sessions.push(new PlayerTrainingSession(name, exercisesIds, exercisesNames, totalDuration, startTime, endTime, date));
    }



}