const config = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    },
    
    dialectOptions: {
      useUTC: false, // for reading from database
    },
    timezone: '+07:00', // for writing to database
  }
);
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.transaction = require("../models/transaction.model.js")(sequelize, Sequelize);

//one to many
db.user.hasMany(db.transaction,{as:"transactions"}); //always add S in the end of the table's name
db.transaction.belongsTo(db.user,{foreignKey: "userId", // table's name and ad "Id" in the end
as: "users",});


module.exports = db;