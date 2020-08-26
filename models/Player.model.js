module.exports = (sequelize, Sequelize) => {
    return sequelize.define("Player", {
        username: Sequelize.STRING,
    });
};
