import { Category } from "../domain/Category";
import { CosmosDBRepository } from "@/backend/shared/infrastructure/CosmosDBRepository";
    
export class CategoryRepository extends CosmosDBRepository<Category> {
  constructor() {
    super("categories");
  }

  // Add any category-specific methods here if needed
}