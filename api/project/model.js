// build your `Project` model here
const db = require('../../data/dbConfig')

async function get () {

  const rows = await db('projects as p')

  const projects = []

  rows.forEach(row => {
    if (row) {
      projects.push({
        "project_id": row.project_id,
        "project_name": row.project_name,
        "project_description": row.project_description,
        "project_completed": row.project_completed < 1 ? false : true,
      })
    }
  })

  return projects;
}

function create (project) {
  return db('projects as p').insert(project)
  .then(([project_id]) => {
    return db('projects').where('project_id', project_id).first()
  })
  .then(row => {
    const conversion = {
      "project_id": row.project_id,
      "project_name": row.project_name,
      "project_description": row.project_description,
      "project_completed": row.project_completed < 1 ? false : true,
    }
    return conversion
  })
}

module.exports = {
  get,
  create
}