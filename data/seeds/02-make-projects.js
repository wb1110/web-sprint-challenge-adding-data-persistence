const projects = [
  { project_name: 'Test project', project_description: 'testing it out', project_completed: false},
]
 
const resources = [
  { resource_name: 'Paper', resource_description: 'white' },
]
 
const tasks = [
  { 
    task_description: 'Fold paper', 
    task_notes: 'into a paper airplaine', 
    task_completed: false,
    project_id: 1
   },
]
 
const project_resources = [
  { resource_id: 1, project_id: 1 },
]
 
exports.seed = async function (knex) {
  await knex('projects').insert(projects)
  await knex('resources').insert(resources)
  await knex('tasks').insert(tasks)
  await knex('project_resources').insert(project_resources)
}
