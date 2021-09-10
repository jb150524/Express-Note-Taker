const User = require('./User');
const Post = require('./Post');
const Post = require('./Comment');

User.hasMany(Project, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
  Project.belongsTo(User, {
    foreignKey: 'user_id'
  });
  
  module.exports = { User, Project };