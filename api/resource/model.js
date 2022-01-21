// build your `Resource` model here
const db = require('../../data/dbConfig')

async function get () {
  const rows = await db('resources as r');
  return rows;
}

function create (resource) {
  return db('resources').insert(resource)
  .then(([resource_id]) => {
    return db('resources').where('resource_id', resource_id).first()
  });
}

module.exports = {
  get,
  create
}