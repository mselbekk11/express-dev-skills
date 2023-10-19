const skills = [
  { id: 525223, skill: 'Vanilla JS', done: true },
  { id: 627904, skill: 'Express', done: false },
  { id: 939608, skill: 'React', done: false },
]

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
}

function deleteOne(id) {
  id = parseInt(id)
  const idx = skills.findIndex((skill) => skill.id === id)
  skills.splice(idx, 1)
}

function create(skill) {
  skill.id = Date.now() % 1000000
  skill.done = false
  skills.push(skill)
}

function getOne(id) {
  id = parseInt(id)
  return skills.find((skill) => skill.id === id)
}

function getAll() {
  return skills
}
