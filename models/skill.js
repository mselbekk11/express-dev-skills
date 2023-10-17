const skills = [
  { id: 525223, skill: 'Vanilla JS', done: true },
  { id: 627904, skill: 'Express', done: false },
  { id: 939608, skill: 'React', done: false },
]

module.exports = {
  getAll,
  getOne,
}

function getOne(id) {
  id = parseInt(id)
  return skills.find((skill) => skill.id === id)
}

function getAll() {
  return skills
}
