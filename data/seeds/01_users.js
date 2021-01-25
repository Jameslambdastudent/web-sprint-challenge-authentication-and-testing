const bcrypt = require("bcryptjs");

exports.seed = async function(knex) {
 await knex("users").truncate()
 await knex("users").insert([
        {username: "hulk", password: await bcrypt.hash("hulk", 10)},
        {username: "flash", password: await bcrypt.hash("flash", 10)},
        {username: "ironman", password: await bcrypt.hash("ironman", 10)}
 ])
};