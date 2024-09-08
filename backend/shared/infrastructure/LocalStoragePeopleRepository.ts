import { v4 as uuidv4 } from "uuid";
import { Entity, Repository } from "../domain";

export function createLocalStoragePeopleRepository<T extends Entity>(): Repository<T> {
  return {
    save,
    get,
    getAll,
    deleteEntity
  };
}


function save<T extends Entity>(entity: T): Promise<void> {
  return new Promise<void>((resolve) => {
    const entities = getAllFromLocalStorage();
    const idAlt = (uuidv4 as () => string)();
    entities.set(entity.id ?? idAlt, entity);
    localStorage.setItem(
      entity.constructor.name,
      JSON.stringify(Array.from(entities.entries()))
    );
    resolve();
  });
}

async function get<T extends Entity>(id: string): Promise<T | null> {
  const entities = getAllFromLocalStorage();
  const entity = entities.get(id);

  if (!entity) {
    return null;
  }

  return entity as T;
}

async function getAll<T extends Entity>(): Promise<T[]> {
  const entities = getAllFromLocalStorage();

  return Array.from(entities.values()) as T[];
}
async function deleteEntity(id: string): Promise<void> {
  let entities = getAllFromLocalStorage();
  entities.delete(id);
  localStorage.setItem("entities", JSON.stringify(Array.from(entities.entries())));
}

function getAllFromLocalStorage<T extends Entity>(): Map<string, T> {
  const entities = localStorage.getItem("entities");

  if (entities === null) {
    return new Map();
  }

  const map = new Map(JSON.parse(entities) as Iterable<[string, T]>);

  return map;
}

