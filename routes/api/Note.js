const router = require("express").Router();
const NoteController = require ("../../controllers/NoteController");

router.route("/")
.put(NoteController.update)
.post(NoteController.create);

module.exports = router