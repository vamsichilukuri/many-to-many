const { PlayerGameTeam, Player, GameTeam } = require("../config/database");

PlayerGameTeam.belongsTo(Player);
PlayerGameTeam.belongsTo(GameTeam);

// get all
const getAll = async (req, res) => {
    await PlayerGameTeam.findAll()
        .then((gameteam) => res.send(gameteam))
        .catch((error) => res.send(error));
};

// get one
const getOne = async (req, res) => {
    await PlayerGameTeam.findAll({
        where: { PlayerId: req.body.PlayerId, GameTeamId: req.body.GameTeamId },
    })
        .then((playerGameTeam) => res.send(playerGameTeam))
        .catch((error) => res.send(error));
};

// create new
const create = async (req, res) => {
    await PlayerGameTeam.create({
        PlayerId: req.body.PlayerId,
        GameTeamId: req.body.GameTeamId,
    })
        .then((gameTeam) => res.send(gameTeam))
        .catch((error) => res.send(error));
};

// update one
const updateOne = async (req, res) => {
    await PlayerGameTeam.update(
        { GameTeamId: req.body.GameTeamId, PlayerId: req.body.PlayerId },
        { where: { PlayerId: req.body.PlayerId } }
    )
        .then(() => res.send("Updated successfully"))
        .catch((error) => res.send(error));
};

// delete one
const deleteOne = async (req, res) => {
    await PlayerGameTeam.destroy({
        where: { PlayerId: req.body.PlayerId, GameTeamId: req.body.GameTeamId },
    })
        .then(() => res.send("deleted successfully"))
        .catch((error) => res.send(error));
};

module.exports = { getAll, create, getOne, updateOne, deleteOne };
