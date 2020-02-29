
const router = require("express").Router();
const VacationRoutes = require("./Vacations");


// Book routes
router.use("/Vacations", VacationRoutes);

module.exports = router;