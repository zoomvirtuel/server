const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Amateur",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      userName: {
      type: DataTypes.STRING,
      allowNull: false,
      },
      dolares: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      },
      tokens: {
      type: DataTypes.STRING,
      allowNull: false,
      },
      mensual: {
      type: DataTypes.STRING,
      allowNull: false,
      },
    },
    {
      paranoid: true,
      timestamps: true,
    }
  );
};
