'use strict';
module.exports = (sequelize, DataTypes) => {
  var Class = sequelize.define('Class', {
    name: DataTypes.STRING,
    teacherId: DataTypes.INTEGER
  }, {});
  Class.associate = function(models) {
    Class.belongsTo(models.Teacher);
  }
  return Class;
};
