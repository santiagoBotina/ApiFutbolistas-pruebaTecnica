module.exports = (sequelize, dataTypes) => {
  const Admin = sequelize.define(
    "Admin",
    (Cols = {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: dataTypes.INTEGER,
      },
      name: {
        type: dataTypes.STRING,
      },
      email: {
        type: dataTypes.STRING,
      },
      password: {
        type: dataTypes.STRING,
      },
    }),
    {
      tableName: "usuarioadmin",
      timestamps: false,
    }
  );

  return Admin;
};
