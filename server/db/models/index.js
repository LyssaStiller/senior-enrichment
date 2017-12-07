'use strict';

const db = require('../index');


//pulling in our models
const Students = require('./students')
const Campuses = require('./campuses')

//associations
Students.belongsTo(Campuses)
Campuses.hasMany(Students)

module.exports = {
	db,
	Students,
	Campuses
}


//NOTES
//act like an index, export just the db or the db and the models. both do the same thing . it will be how we access them all somewhere else even though we don't neccessarily define them
// Require all the models
	// Running each model (i.e. table) module (i.e. file) registers each model into our sequelize db
	// This works if we all use the same Sequelize instance (instantiated in and exported from `/db/index.js`)
	// Exporting all models from here seems like a good idea!

// This is also probably a good place for you to set up your associations
