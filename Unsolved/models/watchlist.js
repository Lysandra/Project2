module.exports = function(sequelize, Sequelize) {
 
    var Watchlist = sequelize.define('watchlist', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        userid: {
            type: Sequelize.INTEGER,
            notEmpty: true
        },
 
        currencycode: {
            type: Sequelize.STRING,
            notEmpty: true
        },
 
        name: {
            type: Sequelize.STRING,
            notEmpty: true
        },
 
        status: {
            type: Sequelize.ENUM('active', 'inactive'),
            defaultValue: 'active'
        }
 
 
    });
 
    return Watchlist;
 
}