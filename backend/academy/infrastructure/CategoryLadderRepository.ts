import { CategoryLadder } from "../domain/CategoryLadder";
import { CosmosDBRepository } from "@/backend/shared/infrastructure/CosmosDBRepository";

export class CategoryLadderRepository extends CosmosDBRepository<CategoryLadder> {
  constructor() {
    super("category_ladders");
  }

  // Add any category ladder-specific methods here if needed
}