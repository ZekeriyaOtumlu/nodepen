const router = require("express").Router();
const VacationsController = require ("../../controllers/VacationController");


router.route("/placeSearch/:search")
.get(VacationsController.placeSearch)


router.route("/photoSearch/:query")
.get(VacationsController.photoSearch)
// Matches "/api/Vacations"
router.route("/")
.get(VacationsController.findAll)
.post(VacationsController.create);



router.route("/:id")
.get(VacationsController.findById)
.put(VacationsController.update)
.delete(VacationsController.remove);

module.exports = router;