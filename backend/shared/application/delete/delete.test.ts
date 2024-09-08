import { Entity } from "../../domain/Entity";
import { TestRepository } from "../../domain/TestRepository";
import { deleteEntity } from "./delete";

describe("delete", () => {
  it("deletes an existing entity", async () => {
    const repository = new TestRepository();
    const entity = new Entity();
    await repository.save(entity);

    await deleteEntity(repository, entity.id);

    const retrievedEntity = await repository.get(entity.id);
    expect(retrievedEntity).toBeNull();
  });

  it("throws an error when trying to delete a non-existent entity", async () => {
    const repository = new TestRepository();
    const nonExistentId = "non-existent-id";

    await expect(deleteEntity(repository, nonExistentId)).rejects.toThrow(
      `Entity with id ${nonExistentId} not found`
    );
  });
});