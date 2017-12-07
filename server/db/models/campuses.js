const Sequelize = require('sequelize');
const db = require('../index');

var Campuses = db.define('campuses', {
    name: {
        type: Sequelize.STRING,
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: "http://images.shape.mdpcdn.com/sites/shape.com/files/styles/slide/public/puppy-2_0.jpg"
    },
    description: {
       type: Sequelize.TEXT
    }
})


module.exports = Campuses;
