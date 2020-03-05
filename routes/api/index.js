
const router = require("express").Router();

const VacationRoutes = require("./Vacation");

const NotesRoutes = require("./Note");


// Book routes
router.use("/Vacation", VacationRoutes);

router.use("/Note", NotesRoutes)


module.exports = router;







