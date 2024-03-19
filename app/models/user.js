'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    firstName: {
      type: DataTypes.STRING, 
      allowNull: false,
      validate: {
        notNull: { msg: "firstName is required" },
      },
    },
 
    lastName: {
      type: DataTypes.STRING, 
      allowNull: false,
      validate: {
        notNull: { msg: "lastname is required" },
      },
    },
    email: {
      type: DataTypes.STRING, 
      allowNull: false, 
      unique: true,
      validate: {
        notNull: { msg: "email is required" },
        isEmail: {msg:"email is invalid"}
      },
    },
    password: {
      type: DataTypes.STRING, 
      allowNull: false,
      validate: {
        notNull: { msg: "password is required" },
      },
    },

    
  }, {
    sequelize,
    timestamps: false,
    modelName: 'User',
  });
  return User;
};