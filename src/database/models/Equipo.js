module.exports = (sequelize, dataTypes) => {
  const Equipo = sequelize.define(
    "Equipo",
    (Cols = {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: dataTypes.INTEGER,
      },
      name: {
        type: dataTypes.STRING,
      },
      league: {
        type: dataTypes.STRING,
      },
      country: {
        type: dataTypes.STRING,
      },
    }),
    {
      tableName: "equipo",
      timestamps: false,
    }
  );

  Equipo.associate = (models) => {
    Equipo.hasMany(models.Futbolista, {
      as: "Futbolista",
      foreignKey: "id",
    });
  };

  return Equipo;
};
