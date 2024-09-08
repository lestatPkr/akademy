import { TrainingPlanRepository } from "../../domain/TrainingPlanRepository";
import { TrainingPlan } from "../../domain/TrainingPlan";
import { createTrainingPlan, CreateTrainingPlanDTO } from "./createTrainingPlan";
import { jest } from '@jest/globals';
import { TeamCalendarEventRepository } from "../../../teams/domain/TeamCalendarEventRepository";

describe("createTrainingPlan", () => {
  it("creates a new training plan, saves it to the repository, and schedules calendar events", async () => {
    const mockTrainingPlanRepository: jest.Mocked<TrainingPlanRepository> = {
      save: jest.fn(),
      get: jest.fn(),
      getAll: jest.fn(),
      deleteEntity: jest.fn(),
      delete: jest.fn(),
      findByTeamId: jest.fn(),
      findByStatus: jest.fn(),
      saveMany: jest.fn(),
    };

    const mockCalendarEventRepository: jest.Mocked<TeamCalendarEventRepository> = {
      save: jest.fn(),
      get: jest.fn(),
      getAll: jest.fn(),
      deleteEntity: jest.fn(),
      delete: jest.fn(),
      saveMany: jest.fn(),
      findByTeamId: jest.fn(), // Add this line
    };

    const dto: CreateTrainingPlanDTO = {
      name: "Team A Training Plan",
      description: "Comprehensive training plan for Team A",
      teamId: "teamId",
      objectives: ["Improve communication", "Enhance problem-solving skills"],
      competencyIds: ["Teamwork", "Critical thinking"],
      start_date: "2023-06-01",
      sessions: [
        {
          name: "Session 1",
          description: "First training session",
          duration: 60,
          exercisesIds: ["exercise1", "exercise2"],
          exercisesNames: ["exercise1", "exercise2"],
          startTime: "09:00",
          endTime: "10:00",
          date: "1685620800000", // 2023-06-01 in milliseconds
        }
      ],
      progress: 0 // Add this line
    };

    const result = await createTrainingPlan(mockTrainingPlanRepository, mockCalendarEventRepository, dto);

    expect(result).toBeInstanceOf(TrainingPlan);
    expect(result.name).toBe(dto.name);
    expect(result.description).toBe(dto.description);
    expect(result.teamId).toBe(dto.teamId);
    expect(result.competencies).toEqual(dto.competencyIds);
    expect(result.start_date).toBe(dto.start_date);
    expect(result.sessions).toHaveLength(1);
    expect(result.objectives).toEqual(dto.objectives);

    expect(mockTrainingPlanRepository.save).toHaveBeenCalledWith(result);
    expect(mockCalendarEventRepository.saveMany).toHaveBeenCalled();
  });
});