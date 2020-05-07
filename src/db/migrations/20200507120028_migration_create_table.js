exports.up = function (knex) {
    return knex.schema
        .createTable('units', (t) => {
            t.increments().primary()
            t.string('name').notNull()
        })
        .createTable('recipes_knex', (t) => {
            t.increments().primary()
            t.string('name').notNull()
            t.text('description').notNull()
            t.timestamp('created_at').defaultTo(knex.fn.now())
            t.float('calories').nullable()

        })
};

exports.down = function (knex) {
    return knex.schema.dropTable('recipes_knex').dropTable('units');
};