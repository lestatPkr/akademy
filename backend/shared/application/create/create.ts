import { Repository } from "../../domain/Repository";

export function create<T>(repository: Repository<T>, entity: T): void {
  repository.save(entity);
}
