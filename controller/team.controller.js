const { Team, Game, GameTeam } = require("../config/database");

Team.belongsToMany(Game, { through: GameTeam });
Team.hasMany(GameTeam);

// get all
const getAll = async (req, res) => {
    await Team.findAll()
        .then((teams) => res.send(teams))
        .catch((error) => res.send(error));
};

// insert new
const create = async (req, res) => {
    await Team.create({
        name: req.body.name,
    })
        .then((team) => res.send(team))
        .catch((error) => res.send(error));
};

// get one
const getOne = async (req, res) => {
    await Team.findByPk(req.params.id)
        .then((team) => res.send(team))
        .catch((error) => res.send(error));
};

// update one
const updateOne = async (req, res) => {
    await Team.update(
        {
            name: req.body.name,
        },
        { where: { id: req.params.id } }
    )
        .then(() => res.send("Updated successfully"))
        .catch((error) => res.send(error));
};

// delete one
const deleteOne = async (req, res) => {
    await Team.destroy({ where: { id: req.params.id } })
        .then(() => res.send("deleted successfully"))
        .catch((error) => res.send(error));
};

module.exports = { getAll, create, getOne, updateOne, deleteOne };
