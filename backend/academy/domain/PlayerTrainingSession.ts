import { Entity } from "../../shared/domain";

export class PlayerTrainingSession extends Entity {
    name: string;
    exercisesIds: string[];
    exercisesNames: string[];
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
        totalDuration: number,
        startTime: string,
        endTime: string,
        date: string) {
        super();
        this.name = name;
        this.exercisesIds = exercisesIds;
        this.exercisesNames = exercisesNames;
        this.totalDuration = totalDuration;
        this.startTime = startTime;
        this.endTime = endTime;
        this.date = date;
    }
}