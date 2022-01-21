// build your `Project` model here
const db = require('../../data/dbConfig')

async function get () {
  const projects = await db('projects');
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
  return projects;
}

module.exports = {
  get
}