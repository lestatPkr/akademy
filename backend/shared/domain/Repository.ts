interface Repository<T> {
  save: (entity: T) => Promise<void>;
  saveMany: (entities: T[]) => Promise<void>;
  get: (id: string) => Promise<T | null>;
  getAll: () => Promise<T[]>;
  deleteEntity: (id: string) => Promise<void>;
  delete: (id: string) => Promise<void>; // Add this line
}
export type { Repository };
