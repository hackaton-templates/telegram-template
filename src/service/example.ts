import db from "../db/kysely";
import { Example } from "../db/schema/example-table";

export async function getById(id: number): Promise<Example | undefined> {
  return await db
    .selectFrom("example")
    .selectAll()
    .where("id", "=", id)
    .executeTakeFirst();
}

export async function addKey(key: string) {
  await db.insertInto("example").values({ key }).executeTakeFirst();
}
