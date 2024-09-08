import { TrainingPlan } from "../../domain/TrainingPlan";
import { TrainingPlanRepository } from "../../domain/TrainingPlanRepository";
import { TrainingSession } from "../../domain/TrainingSession";
import { schedule } from "../../../teams/application/get-calendar/schedule";
import { TeamCalendarEventRepository } from "../../../teams/domain/TeamCalendarEventRepository";
import { CalendarEventDTO } from "../../../teams/application/get-calendar/schedule";
export interface CreateTrainingSessionDTO {
  name: string;
  description: string;
  duration: number;
  exercisesIds: string[];
  start_time: string;
  end_time: string;
  date: number;
}

import { z } from 'zod';
import { TeamCalendarEvent } from "@/backend/teams/domain/TeamCalendarEvent";

export const CreateTrainingPlanDTO = z.object({
  name: z.string(),
  description: z.string().describe('The reasoning of the training plan configuration (Max 750 characters)'),
  teamId: z.string().describe('The ID of the team for which the training plan is created'),
  objectives: z.array(z.string()).describe('The main objectives of the training plan and expected results (Max 750 characters)'),
  competencyIds: z.array(z.string()).describe('The IDs of the competencies of the training plan'),
  start_date: z.string().describe('The start date of the training plan'),
  progress: z.number().describe('The progress of the training plan'),
  durationInWeeks: z.number().describe('The duration of the training plan in weeks'),
  sessions: z.array(z.object({
    name: z.string(),
    description: z.string(),
    duration: z.number().describe('The duration of the training session in minutes'),
    exercisesIds: z.array(z.string()).describe('The IDs of the exercises of the training session'),
    exercisesNames: z.array(z.string()).describe('The names of the exercises of the training session'),
    mainCompetencyName: z.string().describe('The name of the main competency of the training session'),
    startTime: z.string().describe('The start time of the training session'),
    endTime: z.string().describe('The end time of the training session'),
    date: z.string().describe('The date of the training session')
  }))
});

export type CreateTrainingPlanDTO = z.infer<typeof CreateTrainingPlanDTO>;

export async function createTrainingPlan(
  trainingPlanRepository: TrainingPlanRepository,
  calendarEventRepository: TeamCalendarEventRepository,
  dto: CreateTrainingPlanDTO
): Promise<TrainingPlan> {
  const trainingPlan = mapTrainingPlan(dto);

  const calendarEvents: CalendarEventDTO[] = createCalendarEvents(trainingPlan);
  await trainingPlanRepository.save(trainingPlan);
  console.log("Training plan created");
  await schedule(calendarEventRepository, dto.teamId, calendarEvents);
  console.log("Calendar events created");
  return trainingPlan;
}

export function mapTrainingPlan(dto: CreateTrainingPlanDTO) {
  const trainingPlan = new TrainingPlan(dto.name, dto.description, dto.durationInWeeks, dto.competencyIds, dto.start_date, dto.teamId);
  trainingPlan.objectives = dto.objectives;

  // Add a null check before using forEach
  if (dto.sessions) {
    dto.sessions.forEach((session) => {
      trainingPlan.addSession(session.name, session.exercisesIds, session.exercisesNames, session.mainCompetencyName, session.duration, session.startTime, session.endTime, session.date);
    });
  }
  return trainingPlan;
}
export function createCalendarEvents(trainingPlan: TrainingPlan) {
  const calendarEvents: CalendarEventDTO[] = trainingPlan.sessions.map((session) => (new TeamCalendarEvent(
    session.name,
    "",
    session.date,
    session.startTime,
    session.endTime,
    trainingPlan.teamId,
    'training',
    session.id)));
  return calendarEvents;
}
