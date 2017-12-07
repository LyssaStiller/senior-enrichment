'use strict'
const chalk = require('chalk');
const Sequelize = require('sequelize');

console.log(chalk.yellow("Opening database connection"));

const db = require('./db');

// register models
require('./models');

module.exports = db;

