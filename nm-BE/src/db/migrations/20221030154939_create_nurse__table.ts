import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("nurses", (table) => {
    table.increments("id");
    table.string("name").notNullable();
    table.string("contact").notNullable();
    table.string("email");
    table.string("address");
    table.string("photo").notNullable();
    table.boolean("rounding_manager").defaultTo(false);
    table
      .integer("user_id")
      .notNullable()
      .references("id")
      .inTable("user_account")
      .onDelete("CASCADE");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("nurse");
}
