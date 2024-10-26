import { Generated, Insertable, Selectable, Updateable } from "kysely";

export interface ExampleTable {
  id: Generated<number>;
  key: string;
}

export type Example = Selectable<ExampleTable>;
export type NewExample = Insertable<ExampleTable>;
export type ExampleUpdate = Updateable<ExampleTable>;
