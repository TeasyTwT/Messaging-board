var DataTypes = require("sequelize").DataTypes;
var _message = require("./message");
var _user = require("./user");
var _usersession = require("./usersession");

function initModels(sequelize) {
  var message = _message(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);
  var usersession = _usersession(sequelize, DataTypes);

  message.belongsTo(user, { as: "user", foreignKey: "userID"});
  user.hasMany(message, { as: "messages", foreignKey: "userID"});
  usersession.belongsTo(user, { as: "user", foreignKey: "userID"});
  user.hasMany(usersession, { as: "usersessions", foreignKey: "userID"});

  return {
    message,
    user,
    usersession,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
