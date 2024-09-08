import { Entity } from "../../shared/domain/Entity";

export class TrainingModel extends Entity {
  constructor(
    public name: string,
    public description: string,
    public principlesIds: string[],
    public objectives: string[],
    public guidelines: string[]
  ) {
    super();
  }
}