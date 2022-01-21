// build your `Project` model here
const db = require('../../data/dbConfig')

async function get () {
  const projects = await db('projects');
  return projects;
}

module.exports = {
  get
}