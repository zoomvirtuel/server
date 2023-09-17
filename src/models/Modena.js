const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Moneda",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      edolar: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      eeuro: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      elibra: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      pdolar: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      peuro: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      plibra: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
    },
    {
      paranoid: true,
      timestamps: true,
    }
  );
};
