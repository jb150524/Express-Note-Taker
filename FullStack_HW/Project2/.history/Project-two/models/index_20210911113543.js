const User = require('./User');

User.hasMany(P, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

  module.exports = { User };