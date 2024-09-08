import { TrainingModel } from "../../domain/TrainingModel";
import { TrainingModelRepository } from "../../domain/TrainingModelRepository";
import { PrincipleRepository } from "../../domain/PrincipleRepository";
import { CompetencyRepository } from "../../domain/CompetencyRepository";
import { TrainingExerciseRepository } from "../../domain/TrainingExerciseRepository";
import Principle from "../../domain/Principle";
import { Competency } from "../../domain/Competency";
import { TrainingExercise } from "../../domain/TrainingExercise";

import { z } from "zod";

export const trainingModelDataDTOSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  principles: z.array(z.custom<Principle>()),
  competencies: z.array(z.custom<Competency>()),
  trainingExercises: z.array(z.custom<TrainingExercise>()),
  objectives: z.array(z.string()),
  guidelines: z.array(z.string()),
});

export type TrainingModelDataDTO = z.infer<typeof trainingModelDataDTOSchema>;
export async function getTrainingModelData(
  trainingModelRepository: TrainingModelRepository,
  principleRepository: PrincipleRepository,
  competencyRepository: CompetencyRepository,
  trainingExerciseRepository: TrainingExerciseRepository,
  trainingModelId: string
): Promise<TrainingModelDataDTO | null> {
  const trainingModel = await trainingModelRepository.get(trainingModelId);

  if (!trainingModel) {
    return null;
  }

  const principles = await principleRepository.findByIds(trainingModel.principlesIds);
  const competencies = await competencyRepository.findByPrincipleId(trainingModelId);
  const trainingExercises = await trainingExerciseRepository.getAll();

  return {
    id: trainingModel.id,
    name: trainingModel.name,
    description: trainingModel.description,
    principles,
    competencies,
    trainingExercises,
    objectives: trainingModel.objectives,
    guidelines: trainingModel.guidelines,
  } as TrainingModelDataDTO;
}