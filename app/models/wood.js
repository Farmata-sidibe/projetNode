'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Wood extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Wood.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "name is required" },
      },
    },
    type: {
      type: DataTypes.ENUM, 
      allowNull: false,
      values: ["softwood", "exotic wood", "noble and hardwoods"],
      validate: {
        notNull: { msg: "type is required" },
      },
    },
    hardness: {
      type: DataTypes.ENUM, 
      allowNull: false,
      values: ['tender', 'medium-hard','hard'],
      validate: {
        notNull: { msg: "hardness is required" },
      },
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Wood',
  });
  return Wood;
};