const db = require("../config/db");

async function createRoom(name) {
	const sql = "INSERT INTO rooms (name) VALUES ($1)";
	let result = await db.query(sql, [name])
		return result.rows[0]
	}

async function getRoom(id) {
	const sql = "SELECT * FROM rooms WHERE id = $1";
	let result = await db.query(sql, id)
		return result.rows[0];
}

async function getAllRooms() {
	const sql = "SELECT * FROM rooms";
	let result = await db.query(sql)
	return result.rows
}

async function deleteRoom(name) {
	const sql = "DELETE FROM rooms WHERE name = $1";
	let result = await db.query(sql, name)
		return result.rows[0];
	}

module.exports = {
	createRoom,
	getRoom,
	deleteRoom,
	getAllRooms,
};
