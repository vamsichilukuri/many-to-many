const router = require("express").Router();
const {
    getAll,
    create,
    findOne,
    updateGame,
    deleteGame,
} = require("../controller/game.controller");

// get all
router.get("/", getAll);
// get one
router.get("/:id", findOne);
// insert one
router.post("/new", create);
// update one
router.put("/edit/:id", updateGame);
// delete one
router.delete("/delete/:id", deleteGame);

module.exports = router;
