const { Client } = require("pg");
// const sqlite = require("sqlite3").verbose();

const roomStmt = `
CREATE TABLE IF NOT EXISTS rooms
 (
    id SERIAL PRIMARY KEY,
     name TEXT UNIQUE
     )`;

const userStmt = `
CREATE TABLE IF NOT EXISTS users 
(
    id TEXT PRIMARY KEY,
     name TEXT
     )`;

const messagestmt = `
CREATE TABLE IF NOT EXISTS messages 
(
    id SERIAL PRIMARY KEY,
     msg TEXT NOT NULL,
      room_id INTEGER,
        user_id TEXT,
		user_name TEXT,
		date INTEGER,
         CONSTRAINT fk_room_id FOREIGN KEY(room_id) REFERENCES rooms(id) ON DELETE CASCADE,
          CONSTRAINT fk_user_id FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
          )`;

const db = new Client({
	ssl: {
		rejectUnauthorized: false,
	},
	connectionString: process.env.DATABASE_URL,
});

db.connect();

// const db = new sqlite.Database("./db.sqlite", (error) => {
// 	if (error) {
// 		console.error(error.message);
// 		throw error;
// 	}
db.query(roomStmt, (error) => {
	if (error) {
		console.error(error.message);
		throw error;
	}
});
db.query(userStmt, (error) => {
	if (error) {
		console.error(error.message);
		throw error;
	}
});
db.query(messagestmt, (error) => {
	if (error) {
		console.error(error.message);
		throw error;
	}
});

module.exports = db;
