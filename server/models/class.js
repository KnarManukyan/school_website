'use strict';
module.exports = (sequelize, DataTypes) => {
  var Class = sequelize.define('Class', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  Class.associate = function(models) {
    // associations can be defined here
  };
  return Class;
};