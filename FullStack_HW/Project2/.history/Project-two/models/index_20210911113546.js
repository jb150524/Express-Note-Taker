const User = require('./User');

User.hasMany(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

  module.exports = { User };