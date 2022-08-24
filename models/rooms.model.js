const db = require("../config/db");

function createRoom(name) {
	const sql = "INSERT INTO rooms (name) VALUES ($1)";
	return db.query(sql, [name], function (error, room) {
		if (error) {
			console.error(error.message);
		}
		return room;
	});
}

function getRoom(id) {
	const sql = "SELECT * FROM rooms WHERE id = ?";
	return db.query(sql, id, (error, room) => {
		if (error) {
			console.error(error.message);
		}
		return room;
	});
}

function getAllRooms() {
	const sql = "SELECT * FROM rooms";
	return db.query(sql, (error, result) => {
		if (error) {
			console.error(error.message);
		}
		return result.rows;
	});
}

function deleteRoom(name) {
	const sql = "DELETE FROM rooms WHERE name = ?";
	return db.query(sql, name, (error) => {
		if (error) {
			console.error(error.message);
		}
		return name;
	});
}

module.exports = {
	createRoom,
	getRoom,
	deleteRoom,
	getAllRooms,
};
