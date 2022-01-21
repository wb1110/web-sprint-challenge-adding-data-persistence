
exports.up = async function(knex) {
  await knex.schema
    .createTable('projects', tbl => {
      tbl.increments('project_id');
      tbl.string('project_name').notNullable();
      tbl.string('project_description');
      tbl.boolean('project_completed');
    })
    .createTable('resources', tbl => {
      tbl.increments('resource_id');
      tbl.string('resource_name').notNullable().unique();
      tbl.string('resource_description');
    })
    .createTable('tasks', tbl => {
      tbl.increments('task_id');
      tbl.string('task_description').notNullable();
      tbl.string('task_notes');
      tbl.boolean('task_completed');
      tbl.integer('project_id')
      .unsigned()
      .notNullable()
      .references('project_id')
      .inTable('projects')
    })
    .createTable('project_resources', tbl => {
      tbl.increments('project_resources_id');
      tbl.integer('project_id')
      .unsigned()
      .notNullable()
      .references('project_id')
      .inTable('projects')
      tbl.integer('resource_id')
      .unsigned()
      .notNullable()
      .references('resource_id')
      .inTable('resources')
    })
};

exports.down = async function(knex) {
  await knex.schema
  .dropTableIfExists('project_resources')
  .dropTableIfExists('tasks')
  .dropTableIfExists('resources')
  .dropTableIfExists('projects')
};
