const db = require("../config/db");

function createUser(id, name) {
	const sql = "INSERT INTO users (id, name) VALUES ($1, $2)";
	return db.query(sql, [id, name], function (error, user) {
		if (error) {
			console.error(error.message);
		}
		return user;
	});
}

function getUser(id) {
	const sql = "SELECT * FROM users WHERE id = ?";
	return db.query(sql, id, (error, user) => {
		if (error) {
			console.error(error.message);
		}
		return user;
	});
}

function getAllUser() {
	const sql = "SELECT * FROM users";
	return db.query(sql, (error, users) => {
		if (error) {
			console.error(error.message);
		}
		return users;
	});
}

function deleteUser(name) {
	const sql = "DELETE FROM users WHERE name = ?";
	return db.query(sql, name, (error) => {
		if (error) {
			console.error(error.message);
		}
		return;
	});
}

module.exports = {
	createUser,
	getUser,
	getAllUser,
	deleteUser,
};
