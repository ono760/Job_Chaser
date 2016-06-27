/**
 * Created by Nikhil on 6/27/16.
 */
var environment = process.env.NODE_ENV || 'development';
var config =require('../knexfile.js')[environment];
module.export =require('knex')(config);