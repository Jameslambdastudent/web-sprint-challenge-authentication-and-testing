const db = require("../../data/dbConfig")

module.exports = {
    find,
    findById,
    findBy,
    add
}

function find() {
    return db("users")
        .select("id", "username", "password")
}

function findById(id) {
    return db("users")
        .select("id", "username", "password")
        .where({id}).first()
}

function findBy(filter) {
    return db("users")
        .select("id", "username", "password")
        .where(filter)
}

async function add(user) {
    const [id] = await db("users").insert(user)
        return findById(id)
}