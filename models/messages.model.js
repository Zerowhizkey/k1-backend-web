const db = require("../config/db");

async function addMessage({ msg, room_id, user_id, user_name, date }) {
	const sql =
		"INSERT INTO messages (msg, room_id, user_id, user_name, date) VALUES ($1, $2, $3, $4, $5)";
	let result = await db.query(sql, [msg, room_id, user_id, user_name, date])
		return result.rows[0]
	}

async function getMessages(roomId) {
	const sql = "SELECT * FROM messages WHERE room_id = $1";
	let result = await db.query(sql, [roomId])
		return result.rows[0]
	}

async function deleteMessages(roomId) {
	const sql = "DELETE from messages where room_id = $1";
	let result = await db.query(sql, [roomId])
		return result.rows
	}

module.exports = {
	addMessage,
	getMessages,
	deleteMessages,
};
