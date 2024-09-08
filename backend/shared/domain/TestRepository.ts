import { Entity } from "./Entity";
import { Repository } from "./Repository";

export class TestRepository implements Repository<Entity> {
  private readonly entities: Entity[] = [];

  async save(entity: Entity): Promise<void> {
    this.entities.push(entity);
  }

  async get(id: string): Promise<Entity | null> {
    return this.entities.find((entity) => entity.id === id) || null;
  }

  async getAll(): Promise<Entity[]> {
    return [...this.entities];
  }

  async getList(): Promise<Entity[]> {
    return this.entities;
  }

  async delete(id: string): Promise<void> {
    const index = this.entities.findIndex((entity) => entity.id === id);
    if (index !== -1) {
      this.entities.splice(index, 1);
    }
  }

  async deleteEntity(id: string): Promise<void> {
    const index = this.entities.findIndex((entity) => entity.id === id);
    if (index !== -1) {
      this.entities.splice(index, 1);
    }
  }

  async saveMany(entities: Entity[]): Promise<void> {
    this.entities.push(...entities);
  }
}
