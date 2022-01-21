// build your `Project` model here
const db = require('../../data/dbConfig')

async function get () {
  const projects = await db('projects');
  // if (projects.project_completed === 0) {
  //   projects.project_completed = 'false'
  // }
  return projects;
}

module.exports = {
  get
}