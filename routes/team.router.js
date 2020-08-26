const router = require("express").Router();
const {
    getAll,
    create,
    getOne,
    updateOne,
    deleteOne,
} = require("../controller/team.controller");

// get all
router.get("/", getAll);
// get one
router.get("/:id", getOne);
// insert new
router.post("/new", create);
// update
router.put("/edit/:id", updateOne);
// delete one
router.delete("/delete/:id", deleteOne);

module.exports = router;
