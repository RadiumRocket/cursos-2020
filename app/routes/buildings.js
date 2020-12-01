const building = require("../controllers/building.js");

var router = require("express").Router();

// Retrieve all buildings
router.get("/", building.findAll);

// Create a new building
router.post("/", building.create);

// Retrieve a single building with id
router.get("/:id", building.findOne);

// Update a building with id
router.put("/:id", building.update);

// Delete a building with id
router.delete("/:id", building.delete);

module.exports = router;