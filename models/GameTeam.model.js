module.exports = (sequelize, Sequelize) => {
    return sequelize.define("GameTeam", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
    });
};
