const mongoose = require("mongoose");

const db = {};
db.mongoose = mongoose;
db.url = 'mongodb+srv://admin:AcHsG1Dviib8Lsmv@cluster0.dy1dp.mongodb.net/caldar';
db.building = require("./building.js")(mongoose);

module.exports = db;