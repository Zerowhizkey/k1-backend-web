const db = require("../config/db");

async function createUser(id, name) {
	const sql = "INSERT INTO users (id, name) VALUES ($1, $2)";
	let result = await db.query(sql, [id, name])
		return result.rows[0]
	}

async function getUser(id) {
	const sql = "SELECT * FROM users WHERE id = $1";
	let result = await db.query(sql, id)
		return result.rows[0]
	}

async function getAllUser() {
	const sql = "SELECT * FROM users";
	let result = await db.query(sql)
		return result.rows
	}

async function deleteUser(name) {
	const sql = "DELETE FROM users WHERE name = $1";
	let result = await db.query(sql, name)
		return result.rows[0]
	}

module.exports = {
	createUser,
	getUser,
	getAllUser,
	deleteUser,
};
