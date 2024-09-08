import { Repository } from "../../domain/Repository";

export async function deleteEntity<T>(repository: Repository<T>, id: string): Promise<void> {
  const existingEntity = await repository.get(id);
  if (!existingEntity) {
    throw new Error(`Entity with id ${id} not found`);
  }
  await repository.deleteEntity(id);
}