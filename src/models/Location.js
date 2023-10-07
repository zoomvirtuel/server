const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Location",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      porcentaje: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      inicial: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      meta: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      // city: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      // },
      // departament: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      // },
    },
    {
      paranoid: true,
      timestamps: true,
    }
  );
};
