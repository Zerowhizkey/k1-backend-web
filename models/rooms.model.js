const db = require("../config/db");

function createRoom(name) {
	const sql = "INSERT INTO rooms (name) VALUES (?)";
	return new Promise((resolve, reject) => {
		db.run(sql, [name], function (error, room) {
			if (error) {
				console.error(error.message);
				reject(error);
			}
			resolve(room);
		});
	});
}

function getRoom(id) {
	const sql = "SELECT * FROM rooms WHERE id = ?";
	return new Promise((resolve, reject) => {
		db.get(sql, id, (error, room) => {
			if (error) {
				console.error(error.message);
				reject(error);
			}
			resolve(room);
		});
	});
}

function getAllRooms() {
	const sql = "SELECT * FROM rooms";
	return new Promise((resolve, reject) => {
		db.all(sql, (error, rooms) => {
			if (error) {
				console.error(error.message);
				reject(error);
			}
			resolve(rooms);
		});
	});
}

function deleteRoom(name) {
	const sql = "DELETE FROM rooms WHERE name = ?";
	return new Promise((resolve, reject) => {
		db.run(sql, name, (error) => {
			if (error) {
				console.error(error.message);
				reject(error);
			}
			resolve(name);
		});
	});
}

module.exports = {
	createRoom,
	getRoom,
	deleteRoom,
	getAllRooms,
};
