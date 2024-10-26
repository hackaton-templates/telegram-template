import { Kysely } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable("example")
    .addColumn("id", "integer", (col) => col.primaryKey().autoIncrement())
    .addColumn("key", "varchar")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("example").execute();
}
