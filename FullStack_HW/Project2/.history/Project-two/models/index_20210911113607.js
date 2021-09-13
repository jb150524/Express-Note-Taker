const User = require('./User');

User.hasOne(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

  module.exports = { User };