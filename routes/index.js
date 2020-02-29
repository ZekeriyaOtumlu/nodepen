const router = require("express").Router();
const apiRoutes = require("./api");
const path = require("path");

// api routes
router.use("/api", apiRoutes);

// IF could not find api routes, send the React app
router.use(function(req, res){
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;