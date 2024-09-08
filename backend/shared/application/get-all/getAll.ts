import { Repository } from "../../domain/Repository";

export async function getAll<T>(repository: Repository<T>): Promise<T[]> {
  return await repository.getAll();
}
