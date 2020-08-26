const { Player, GameTeam, PlayerGameTeam } = require("../config/database");

Player.belongsToMany(GameTeam, { through: PlayerGameTeam });
Player.hasMany(PlayerGameTeam);

// get all
const getAll = async (req, res) => {
    await Player.findAll()
        .then((players) => res.send(players))
        .catch((error) => res.send(error));
};

// insert new
const create = async (req, res) => {
    await Player.create({
        username: req.body.username,
    })
        .then((player) => res.send(player))
        .catch((error) => res.send(error));
};

// get one
const getOne = async (req, res) => {
    await Player.findByPk(req.params.id)
        .then((player) => res.send(player))
        .catch((error) => res.send(error));
};

// update one
const updateOne = async (req, res) => {
    await Player.update(
        {
            username: req.body.username,
        },
        { where: { id: req.params.id } }
    )
        .then(() => res.send("updated successfully"))
        .catch((error) => res.send(error));
};

// delete one
const deleteOne = async (req, res) => {
    await Player.destroy({ where: { id: req.params.id } })
        .then(() => res.send("deleted successfully"))
        .catch((error) => res.send(error));
};

module.exports = { getAll, create, getOne, updateOne, deleteOne };
