const router = require("express").Router();
const {
    getAll,
    create,
    getOne,
    updateOne,
    deleteOne,
} = require("../controller/gameTeam.controller");

// get all
router.get("/", getAll);
// get one game team
router.get("/:id", getOne);
// new Game team
router.post("/new", create);
// update game team
router.put("/edit", updateOne);
// delete game team
router.delete("/delete", deleteOne);

module.exports = router;
