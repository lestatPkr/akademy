import { mock } from "node:test";
import { Repository } from "../../domain";
import { Entity } from "../../domain/Entity";
import { TestRepository } from "../../domain/TestRepository";
import { update } from "./update";
import { get } from "http";
jest.mock("../../domain/TestRepository");

const MockedTestRepository = TestRepository as jest.Mocked<typeof TestRepository>;


beforeEach(() => {
    jest.clearAllMocks();
});

describe("update", () => {
  it("updates an existing entity", async () => {
    const entity = new Entity();
    const repository = jest.mocked(new TestRepository());
    
    // Mock the get method to return the entity
    jest.spyOn(repository, 'get').mockResolvedValue(entity);

    const updatedEntity = { ...entity, someProperty: "updated" };
    await update(repository, entity.id, updatedEntity);

    // Check if repository.save has been called
    expect(repository.save).toHaveBeenCalledWith(updatedEntity);
    

  });

  it("throws when trying to update a non-existent entity", async () => {
    const repository = jest.mocked(new TestRepository());
    const nonExistentId = "non-existent-id";
    const updatedEntity = new Entity();

    jest.spyOn(repository, "get").mockImplementation((id) => {
        return id === nonExistentId ? Promise.resolve(null) : Promise.resolve(new Entity());
      });
    await expect(update(repository, nonExistentId, updatedEntity)).rejects.toThrow(
      `Entity with id ${nonExistentId} not found`
    );

  });
});

it("not throws when trying to update an existent entity", async () => {
  const repository = jest.mocked(new TestRepository());
  const existingId = "existing-id";
  const existingEntity = new Entity();
  existingEntity.id = existingId;
  const updatedEntity = { ...existingEntity, someProperty: "updated" };

  jest.spyOn(repository, "get").mockResolvedValue(existingEntity);

  await expect(update(repository, existingId, updatedEntity)).resolves.not.toThrow();

  expect(repository.get).toHaveBeenCalledWith(existingId);
  expect(repository.save).toHaveBeenCalledWith(updatedEntity);
  });