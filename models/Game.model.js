module.exports = (sequelize, Sequelize) => {
    return sequelize.define("Game", {
        name: Sequelize.STRING,
    });
};
