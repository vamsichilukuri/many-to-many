const express = require("express");
const bodyparser = require("body-parser");
const { sequelize } = require("./config/database");

const app = express();
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

//----->    ROUTER's
app.use("/api/players", require("./routes/player.router"));
app.use("/api/games", require("./routes/game.router"));
app.use("/api/teams", require("./routes/team.router"));
app.use("/api/gameTeam", require("./routes/gameTeam.router"));
app.use("/api/playerGameTeam", require("./routes/playerGameTeam.router"));

//----->    SERVER && DB
const PORT = process.env.PORT || 2323;
app.listen(PORT, () => {
    sequelize
        .sync()
        .then(() =>
            console.log("db connected and Server running at Port " + PORT)
        )
        .catch((error) => console.log(error));
});
