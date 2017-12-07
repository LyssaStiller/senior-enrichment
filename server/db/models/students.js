const Sequelize = require('sequelize');
const db = require('../index');

var Students = db.define('students', {
    firstName : {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName : {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    gpa : {
        type: Sequelize.DECIMAL,
        validate: {
            min: 0.0,
            max: 4.0
        }
    },
    wholeName : {
        type : Sequelize.VIRTUAL,
        get : function (){
            return  this.getDataValue(firstName) + this.getDataValue(lastName)
        }
    }
})

module.exports = Students;
