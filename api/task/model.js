// build your `Task` model here
const db = require('../../data/dbConfig')

async function get () {
  const rows = await db('tasks as t')
  .leftJoin('projects as p','t.project_id', '=', 'p.project_id')
  .select(
    't.task_id', 
    't.task_description', 
    't.task_notes', 
    't.task_completed', 
    'p.project_name', 
    'p.project_description'
    )

  const tasks = []

  rows.forEach(row => {
    if (row) {
      tasks.push({
        "task_id": row.task_id,
        "task_description": row.task_description,
        "task_notes": row.task_notes,
        "task_completed": row.task_completed < 1 ? false : true,
        "project_name": row.project_name,
        "project_description": row.project_description,
      })
    }
  })

  return tasks;
}

function create (task) {
  return db('tasks as t').insert(task)
  .then(([task_id]) => {
    return db('tasks').where('task_id', task_id).first()
  })
  .then(row => {
    const conversion = {
      "task_id": row.task_id,
      "task_description": row.task_description,
      "task_notes": row.task_notes,
      "task_completed": row.task_completed < 1 ? false : true,
      "project_id": row.project_id,
    }
    return conversion
  })
}

module.exports = {
  get,
  create
}