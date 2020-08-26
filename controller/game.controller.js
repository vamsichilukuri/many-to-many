const { Game, GameTeam, Player, Team } = require("../config/database");

Game.belongsToMany(Team, { through: GameTeam });
Game.hasMany(GameTeam);

// get all
const getAll = async (req, res) => {
    await Game.findAll({
        include: {
            model: GameTeam,
            include: [
                {
                    model: Player,
                    through: { attributes: [] }, // Hide unwanted `PlayerGameTeam` nested object from results
                },
                Team,
            ],
        },
    })
        .then((games) => res.send(games))
        .catch((error) => res.send(error));
};

// get one
const findOne = async (req, res) => {
    await Game.findOne({
        where: {
            id: req.params.id,
        },
        include: {
            model: GameTeam,
            include: [
                {
                    model: Player,
                    through: { attributes: [] }, // Hide unwanted `PlayerGameTeam` nested object from results
                },
                Team,
            ],
        },
    })
        .then((game) => res.send(game))
        .catch((error) => res.send(error));

    // console.log(`Found game: "${game.name}"`);
    // for (let i = 0; i < game.GameTeams.length; i++) {
    //     const team = game.GameTeams[i].Team;
    //     const players = game.GameTeams[i].Players;
    //     console.log(
    //         `- Team "${team.name}" played game "${game.name}" with the following players:`
    //     );
    //     console.log(players.map((p) => `--- ${p.username}`).join("\n"));
    // }
};

// insert new
const create = async (req, res) => {
    await Game.create({
        name: req.body.name,
    })
        .then((game) => res.send(game))
        .catch((error) => res.send(error));
};

// update one
const updateGame = async (req, res) => {
    await Game.update(
        {
            name: req.body.name,
        },
        { where: { id: req.params.id } }
    )
        .then(() => res.send("Updated successfully"))
        .catch((error) => res.send(error));
};

// delete one
const deleteGame = async (req, res) => {
    await Game.destroy({ where: { id: req.params.id } })
        .then(() => res.send("Deleted Successfully"))
        .catch((error) => res.send(error));
};

module.exports = { getAll, findOne, create, updateGame, deleteGame };
