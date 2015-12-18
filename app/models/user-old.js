var User = sequelize.define('user', {

  username: {
    type: Sequelize.STRING
    , notEmpty: true
    , notNull: true
    , isLowercase: true
  }
  , password: {
    type: Sequelize.STRING
    , notEmpty: true
    , notNull: true
  }
  , email: {
    type: Sequelize.STRING
    , notEmpty: true
    , notNull: true
    , isEmail: true
  }
  , firstname: { type: Sequelize.STRING }
  , lastname: { type: Sequelize.STRING }

}, { freezeTableName: true });

module.exports = User;
