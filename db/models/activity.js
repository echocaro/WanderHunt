'use strict';
module.exports = (sequelize, DataTypes) => {
  const Activity = sequelize.define('Activity', {
    name: DataTypes.STRING
  }, {});
  Activity.associate = function(models) {
    Activity.hasMany(models.Post, {foreignKey: 'postId'})

    // associations can be defined here
  };
  return Activity;
};
