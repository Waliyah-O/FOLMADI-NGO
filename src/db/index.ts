import { createDatabase } from "@kilocode/app-builder-db";
import * as schema from "./schema";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let _db: any = null;

function getDb() {
  if (!_db) {
    _db = createDatabase(schema);
  }
  return _db;
}

// Proxy that lazily initializes the database on first property access
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const db = new Proxy({} as any, {
  get(_target, prop) {
    const instance = getDb();
    return Reflect.get(instance, prop);
  },
});
