module.exports = (sequelize, Sequelize) => {
    return sequelize.define("PlayerGameTeam", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
    });
};
