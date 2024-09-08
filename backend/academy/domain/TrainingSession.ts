import { Entity } from "../../shared/domain";

export class TrainingSession extends Entity {
    name: string;
    exercisesIds: string[];
    exercisesNames: string[];
    mainCompetencyName: string;
    totalDuration: number;
    startTime: string;
    endTime: string;
    date: string;
    summary: string | null = null;
    status: "scheduled" | "in_progress" | "finished" | "cancelled" = "scheduled";

    constructor(
        name: string,
        exercisesIds: string[],
        exercisesNames: string[],
        mainCompetencyName: string,
        total_duration: number,
        startTime: string,
        endTime: string,
        date: string) {
        super();
        this.name = name;
        this.exercisesIds = exercisesIds;
        this.exercisesNames = exercisesNames;
        this.mainCompetencyName = mainCompetencyName;
        this.totalDuration = total_duration;
        this.startTime = startTime;
        this.endTime = endTime;
        this.date = date;
    }
}