module.exports = (sequelize, Sequelize) => {
    const Tranaction = sequelize.define("transaction", {
      
      username: {
        type: Sequelize.STRING,
        unique: true
      },
      name: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      }
    });
    return Tranaction;
  };