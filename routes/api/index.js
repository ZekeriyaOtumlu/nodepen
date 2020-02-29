
const router = require("express").Router();
const VacationRoutes = require("./Vacation");


// Book routes
router.use("/Vacation", VacationRoutes);

module.exports = router;