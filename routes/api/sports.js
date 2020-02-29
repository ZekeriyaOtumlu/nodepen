const router = require("express").Router();
const VacationsController = require ("../../controllers/VacationContoller");

// Matches "/api/Vacations"
router.route("/")
.get(VacationsController.findAll)
.post(VacationsController.create);

// Matches with "/api/Vacations: id"

router.route("/:id")
.get(VacationsController.findById)
.put(VacationsController.update)
.delete(VacationsController.remove);

module.exports = router;