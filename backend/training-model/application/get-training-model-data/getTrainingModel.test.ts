import { TrainingModel } from "../../domain/TrainingModel";
import { TrainingModelRepository } from "../../domain/TrainingModelRepository";
import { PrincipleRepository } from "../../domain/PrincipleRepository";
import { CompetencyRepository } from "../../domain/CompetencyRepository";
import { TrainingExerciseRepository } from "../../domain/TrainingExerciseRepository";
import { getTrainingModelData, trainingModelDataDTOSchema } from "./getTrainingModelData";
import { Competency } from "../../domain/Competency";
import { TrainingExercise } from "../../domain/TrainingExercise";
import Principle from "../../domain/Principle";

describe("getTrainingModelData", () => {
  let mockTrainingModelRepository: jest.Mocked<TrainingModelRepository>;
  let mockPrincipleRepository: jest.Mocked<PrincipleRepository>;
  let mockCompetencyRepository: jest.Mocked<CompetencyRepository>;
  let mockTrainingExerciseRepository: jest.Mocked<TrainingExerciseRepository>;

  beforeEach(() => {
    mockTrainingModelRepository = {
      get: jest.fn(),
      findByName: jest.fn(),
      save: jest.fn(),
      getAll: jest.fn(),
      deleteEntity: jest.fn(),
      delete: jest.fn(),
      saveMany: jest.fn(),
    };
    mockPrincipleRepository = {
      findByIds: jest.fn(),
      findByGameModelId: jest.fn(),
      get: jest.fn(),
      save: jest.fn(),
      getAll: jest.fn(),
      deleteEntity: jest.fn(),
      delete: jest.fn(),
      saveMany: jest.fn(),
    };
    mockCompetencyRepository = {
      findByGameModelId: jest.fn(),
      findByPrincipleId: jest.fn(),
      get: jest.fn(),
      save: jest.fn(),
      getAll: jest.fn(),
      deleteEntity: jest.fn(),
      delete: jest.fn(),
      saveMany: jest.fn(),
    };
    mockTrainingExerciseRepository = {
      findByGameModelId: jest.fn(),
      get: jest.fn(),
      save: jest.fn(),
      getAll: jest.fn(),
      deleteEntity: jest.fn(),
      delete: jest.fn(),
      saveMany: jest.fn(),
    };
  });

  //   it("should get a complete training model data by id", async () => {
  //     const mockModel = new TrainingModel("Test Model", "Description", ["principle1"], ["objective1"], ["guideline1"]);
  //     mockTrainingModelRepository.get.mockResolvedValue(mockModel);
  //     mockPrincipleRepository.findByIds.mockResolvedValue([new Principle("Principle 1", "Description")]);
  //     mockCompetencyRepository.findByGameModelId.mockResolvedValue([new Competency("Competency 1", "Description", "principle1", mockModel.id)]);
  //     mockTrainingExerciseRepository.findByGameModelId.mockResolvedValue([new TrainingExercise("Exercise 1", "Development", "Type", "Zone", 10, "Surface", "Goals", "Behaviors", "Variations", mockModel.id, "competency1", "Competency 1", [], "", 30, "Observations", "Multimedia")]);

  //     const result = await getTrainingModelData(
  //       mockTrainingModelRepository,
  //       mockPrincipleRepository,
  //       mockCompetencyRepository,
  //       mockTrainingExerciseRepository,
  //       "test-id"
  //     );

  //     expect(result).toEqual({
  //       id: mockModel.id,
  //       name: mockModel.name,
  //       description: mockModel.description,
  //       principles: expect.any(Array),
  //       competencies: expect.any(Array),
  //       trainingExercises: expect.any(Array),
  //       objectives: mockModel.objectives,
  //       guidelines: mockModel.guidelines
  //     } as TrainingModelDataDTO);
  //     expect(mockTrainingModelRepository.get).toHaveBeenCalledWith(mockModel.id);
  //     expect(mockPrincipleRepository.findByIds).toHaveBeenCalledWith(mockModel.principlesIds);
  //     expect(mockCompetencyRepository.getAll).toHaveBeenCalled();
  //     expect(mockTrainingExerciseRepository.getAll).toHaveBeenCalled();
  //   });

  // Add more tests for error cases...
});