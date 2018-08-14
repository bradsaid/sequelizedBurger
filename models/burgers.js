
module.exports = function (sequelize, DataTypes) {
  let Burger = sequelize.define("Burger", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
        notEmpty: true
    }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      default: 0
    }

  })
  return Burger
}


