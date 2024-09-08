import { Repository } from "../../domain/Repository";

export async function update<T>(repository: Repository<T>, id: string, updatedEntity: T): Promise<void> {
  const existingEntity = await repository.get(id);
  if (existingEntity === null) {
    throw new Error(`Entity with id ${id} not found`);
  }
  await repository.save(updatedEntity);
}