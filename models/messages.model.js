const db = require("../config/db");

function addMessage({ msg, room_id, user_id, user_name, date }) {
	const sql =
		"INSERT INTO messages (msg, room_id, user_id, user_name, date) VALUES ($1, $2, $3, $4, $5)";
	return db.query(sql, [msg, room_id, user_id, user_name, date], (error) => {
		if (error) {
			console.error(error.message);
		}
		return;
	});
}

function getMessages(roomId) {
	const sql = "SELECT * FROM messages WHERE room_id = ?";
	return db.query(sql, [roomId], (error, room) => {
		if (error) {
			console.error(error.message);
		}
		return room;
	});
}

function deleteMessages(roomId) {
	const sql = "DELETE from messages where room_id = ?";
	return db.query(sql, [roomId], (error, room) => {
		if (error) {
			console.error(error.message);
			reject(error);
		}
		return room;
	});
}

module.exports = {
	addMessage,
	getMessages,
	deleteMessages,
};
