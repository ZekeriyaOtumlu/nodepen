const router = require("express").Router();
const sportsController = require ("../../controllers/sportController");

// Matches "/api/sports"
router.route("/")
.get(sportsController.findAll)
.post(sportsController.create);

// Matches with "/api/sports: id"

router.route("/:id")
.get(sportsController.findById)
.put(sportsController.update)
.delete(sportsController.remove);

module.exports = router;