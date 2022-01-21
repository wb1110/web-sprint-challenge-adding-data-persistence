// build your `Project` model here
const db = require('../../data/dbConfig')

async function get () {
  const rows = await db('projects as p');
  return rows;
}

function create (project) {
  return db('projects as p').insert(project)
  .then(([project_id]) => {
    return db('projects').where('project_id', project_id).first()
  });
}

module.exports = {
  get,
  create
}