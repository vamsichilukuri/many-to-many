const Sequelize = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

//  Model's
const PlayerModel = require("../models/Player.model");
const TeamModel = require("../models/Team.model");
const GameModel = require("../models/Game.model");
const GameTeamModel = require("../models/GameTeam.model");
const PlayerGameTeamModel = require("../models/PlayerGameTeam.model");

//  DB setup
const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.USER,
    process.env.PASSWORD,
    {
        dialect: "mysql",
        host: "localhost",
        pool: {
            max: 5,
            min: 0,
            acquire: 40000000,
            idel: 10000,
        },
    }
);

const Player = PlayerModel(sequelize, Sequelize);
const Team = TeamModel(sequelize, Sequelize);
const Game = GameModel(sequelize, Sequelize);
const GameTeam = GameTeamModel(sequelize, Sequelize);
const PlayerGameTeam = PlayerGameTeamModel(sequelize, Sequelize);

module.exports = { sequelize, Player, Team, Game, GameTeam, PlayerGameTeam };
