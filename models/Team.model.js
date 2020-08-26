module.exports = (sequelize, Sequelize) => {
    return sequelize.define("Team", {
        name: Sequelize.STRING,
    });
};
