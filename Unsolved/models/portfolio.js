module.exports = function(sequelize, Sequelize) {
 
    var Portfolio = sequelize.define('portfolio', {
 
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
 
        currencyname: {
            type: Sequelize.STRING,
            notEmpty: true
        },
 
        quantity: {
            type: Sequelize.INTEGER,
            default: 0.0
        },
 
        purchaseprice: {
            type: Sequelize.INTEGER,
            default: 0.0
        },
 
        status: {
            type: Sequelize.ENUM('active', 'inactive'),
            defaultValue: 'active'
        }
 
 
    });
 
    return Portfolio;
 
}