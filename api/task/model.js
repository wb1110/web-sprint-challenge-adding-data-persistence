// build your `Task` model here
const db = require('../../data/dbConfig')

async function get () {
  const rows = await db('tasks');
  return rows;
}

function create (task) {
  return db('tasks').insert(task)
  .then(([task_id]) => {
    return db('tasks').where('task_id', task_id).first()
  });
}

module.exports = {
  get,
  create
}