
const router = require("express").Router();
const sportRoutes = require("./sports");


// Book routes
router.use("/sports", sportRoutes);

module.exports = router;