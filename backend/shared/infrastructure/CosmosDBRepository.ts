import { CosmosClient, Container, Database, JSONObject, BulkOperationType, SqlQuerySpec } from "@azure/cosmos";
import { Entity, Repository } from "../domain";

export abstract class CosmosDBRepository<T extends Entity> implements Repository<T> {
  protected container: Container;
  private client: CosmosClient;
  private databaseId: string;
  constructor(
    private containerId: string
  ) {
    this.client = new CosmosClient({ endpoint: process.env.COSMOS_ENDPOINT || "", key: process.env.COSMOS_ACCOUNT_KEY || "" });
    this.databaseId = process.env.DATABASE_NAME || "";
    this.container = this.client.database(this.databaseId).container(this.containerId);
  }

  async save(entity: T): Promise<void> {
    await this.container.items.upsert(entity);
  }

  async get(id: string): Promise<T | null> {
    try {
      const { resource } = await this.container.item(id, id).read();
      return resource as T;
    } catch (error) {
      if (typeof error === 'object' && error !== null && 'code' in error && error.code === 404) {
        return null;
      }
      throw error;
    }
  }

  async getAll(): Promise<T[]> {
    const { resources } = await this.container.items.readAll().fetchAll();
    return resources as T[];
  }

  async deleteEntity(id: string): Promise<void> {
    await this.container.item(id, id).delete();
  }

  async delete(id: string): Promise<void> {
    await this.deleteEntity(id);
  }

  async findOne(querySpec: SqlQuerySpec): Promise<T | null> {
    const { resources } = await this.container.items.query(querySpec).fetchAll();
    return resources.length > 0 ? resources[0] as T : null;
  }

  async query(querySpec: SqlQuerySpec): Promise<T[]> {
    const { resources } = await this.container.items.query(querySpec).fetchAll();
    return resources as T[];
  }

  async saveMany(entities: T[]): Promise<void> {
    const operations = entities.map(entity => ({
      operationType: BulkOperationType.Upsert,
      resourceBody: entity as unknown as Record<string, any>,
    }));
    try {
      const result = await this.container.items.bulk(operations);
    } catch (error) {
      console.error('Error in batchAdd:', error);
      throw new Error('Failed to add batch');
    }
  }

}