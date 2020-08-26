const {
    GameTeam,
    Game,
    Team,
    Player,
    PlayerGameTeam,
} = require("../config/database");

GameTeam.belongsTo(Game);
GameTeam.belongsTo(Team);
GameTeam.belongsToMany(Player, { through: PlayerGameTeam });
GameTeam.hasMany(PlayerGameTeam);

// get all
const getAll = async (req, res) => {
    await GameTeam.findAll({ include: [Team, Game] })
        .then((gameteam) => res.send(gameteam))
        .catch((error) => res.send(error));
};

// get one
const getOne = async (req, res) => {
    await GameTeam.findAll({
        where: { TeamId: req.body.TeamId, GameId: req.body.GameId },
    })
        .then((gameteam) => res.send(gameteam))
        .catch((error) => res.send(error));
};

// insert one
const create = async (req, res) => {
    await GameTeam.create({
        GameId: req.body.GameId,
        TeamId: req.body.TeamId,
    })
        .then((gameTeam) => res.send(gameTeam))
        .catch((error) => res.send(error));
};

// update one
const updateOne = async (req, res) => {
    await GameTeam.update(
        {
            TeamId: req.body.TeamId,
            GameId: req.body.GameId,
        },
        { where: { TeamId: req.body.TeamId } }
    )
        .then((gameTeam) => res.send(gameTeam))
        .catch((error) => res.send(error));
};

// delete one
const deleteOne = async (req, res) => {
    await GameTeam.destroy({
        where: { TeamId: req.body.TeamId, GameId: req.body.GameId },
    })
        .then(() => res.send("deleted successfully"))
        .catch((error) => res.send(error));
};

module.exports = { getAll, create, updateOne, deleteOne, getOne };
