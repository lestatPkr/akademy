import { Repository } from "../../domain/Repository";
import { Entity } from "../../domain/Entity";
import { getAll } from "./getAll";

describe("getAll", () => {
	it("retrieves all entities from the repository", async () => {
		const mockEntities = [
			new Entity(),
			new Entity(),
			new Entity()
		];

		const repository: Repository<Entity> = {
			getAll: jest.fn().mockResolvedValue(mockEntities),
			get: jest.fn(),
			save: jest.fn(),
			delete: jest.fn(),
			deleteEntity: jest.fn(), // Add this line
			saveMany: jest.fn() // Add this line
		};

		const result = await getAll(repository);

		expect(repository.getAll).toHaveBeenCalled();
		expect(result).toEqual(mockEntities);
	});

	it("returns an empty array when no entities exist", async () => {
		const repository: Repository<Entity> = {
			getAll: jest.fn().mockResolvedValue([]),
			get: jest.fn(),
			save: jest.fn(),
			delete: jest.fn(),
			deleteEntity: jest.fn(), // Add this line
			saveMany: jest.fn() // Add this line
		};

		const result = await getAll(repository);

		expect(repository.getAll).toHaveBeenCalled();
		expect(result).toEqual([]);
	});
});
