import { Entity } from "@/backend/shared/domain";
import { TrainingSession } from "./TrainingSession";

export class TrainingPlan extends Entity {
    public name: string;
    public description: string;
    public durationInWeeks: number;
    public readonly progress: number = 0;
    public start_date: string;
    public readonly status: 'scheduled' | 'in_progress' | 'completed' = 'scheduled';
    public readonly teamId: string = '';
    public readonly sessions: TrainingSession[] = [];
    public readonly competencies: string[] = [];
    public objectives: string[] = [];

    constructor(
        name: string,
        description: string,
        durationInWeeks: number,
        competencies: string[],
        startDate: string,
        teamId: string
    ) {
        super();
        this.name = name;
        this.description = description;
        this.durationInWeeks = durationInWeeks;
        this.competencies = competencies;
        this.start_date = startDate;
        this.teamId = teamId;
    }

    public addSession(
        name: string,
        exercisesIds: string[],
        exercisesNames: string[],
        mainCompetencyName: string,
        totalDuration: number,
        startTime: string,
        endTime: string,
        date: string
    ): void {
        this.sessions.push(new TrainingSession(name, exercisesIds, exercisesNames, mainCompetencyName, totalDuration, startTime, endTime, date));
    }



}