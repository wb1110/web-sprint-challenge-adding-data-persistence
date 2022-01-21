// build your `Project` model here
const db = require('../../data/dbConfig')

async function get () {


  const rows = await db('projects');

  // const result = {
  //   project_id: rows[0].project_id,
  //   project_name: rows[0].project_name,
  //   project_description: rows[0].project_description,
  //   project_completed: rows[0].project_completed === 0 ? false : true
  // }
  const result = {
    project_id: rows[0].project_id,
    project_name: rows[0].project_name,
    project_description: rows[0].project_description,
    project_completed: rows[0].project_completed === 0 ? false : true
  }
  // if (projects.project_completed === 0) {
  //   projects.project_completed = 'false'
  // }
  // projects.forEach(project => {
  //   if (!project.project_completed) {
  //     project.project_completed === 'false'
  //     } else {
  //       project.project_completed === 'true'
  //     }
  //   })
  return result;
}

module.exports = {
  get
}