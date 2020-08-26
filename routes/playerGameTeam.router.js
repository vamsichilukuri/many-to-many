const {
    getAll,
    create,
    updateOne,
    getOne,
    deleteOne,
} = require("../controller/playerGameTeam.controller");
const router = require("express").Router();

// get all
router.get("/", getAll);
// get one
router.get("/pgt", getOne);
// insert new
router.post("/new", create);
// update one
router.put("/edit", updateOne);
// delete one
router.delete("/delete", deleteOne);

module.exports = router;
