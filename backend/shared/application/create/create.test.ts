import { Entity } from "../../domain/Entity";
import { TestRepository } from "../../domain/TestRepository";

it("App Router: Works with Client Components (React State)", () => {
    const repository = new TestRepository();
    jest.spyOn(repository, 'save');

    const entity = new Entity();
    repository.save(entity);

    expect(repository.save).toHaveBeenCalledWith(entity);
});
