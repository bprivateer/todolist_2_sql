'use strict';
module.exports = function(sequelize, DataTypes) {
  var todolist = sequelize.define('todolist', {
    title: DataTypes.STRING,
    completedAt: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return todolist;
};
