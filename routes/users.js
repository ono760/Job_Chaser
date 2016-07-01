"use strict";
var express = require('express');
var router = express.Router();
var pg = require("pg");
var knex = require("../db/knex");
var bcrypt = require("bcrypt");

/* GET users listing. */

// companies for users jobs and all the reviews for companies
router.get('/:id', function(req, res, next) {
  let id = req.params.id;
  // console.log(req.session.user);
  knex('users').select().where('users.id', '=', id).then(function(user) {
    knex('user_jobs').select('companies.id as company_id', 'companies.name', 'companies.location').distinct('user_jobs.id')
    .innerJoin('jobs', 'user_jobs.job_id', 'jobs.id')
    .leftJoin('companies', 'jobs.company_id', 'companies.id')
    .where('user_jobs.user_id', "=", id)
    .then(function(companies) {
      let companyIds = companies.map(function(company) {
        return company.company_id;
      });
      knex('reviews').select().whereIn('reviews.company_id', companyIds).then(function(reviews) {
        companies.forEach(function(company){
          company.reviews = reviews.filter(function(review){
            return review.company_id == company.company_id;
          });
        });

        // Map companys so we can attach to Jobs later
        let companyMap = {};
        companies.forEach(function(company){
          companyMap[company.company_id] = company;
        });

        knex('user_jobs').select('user_jobs.id as user_jobs_id', 'jobs.id as jobs_id', 'companies.id as company_id', 'jobs.position', 'jobs.link_to_application', 'companies.name').distinct('user_jobs.id')
        .innerJoin('jobs', 'user_jobs.job_id', 'jobs.id')
        .innerJoin('companies', 'jobs.company_id', 'companies.id')
        .where('user_jobs.user_id',"=", id).then(function(jobs){
          // console.log(jobs, 'jobs')
          let userJobIds = jobs.map(function(job){
            return job.user_jobs_id;
          });
          knex('user_job_stages').select().whereIn('user_job_stages.user_job_id', userJobIds).then(function(stages){
            jobs.forEach(function(job){
              job.company = companyMap[job.company_id];
              job.stages = stages.filter(function(stage){
                return stage.user_job_id == job.user_jobs_id;
              });
            });
            // assemble into mega
            user[0].jobs = jobs;
            console.log(user[0]);
            res.render('users', {id:req.params.id, jobs:user[0].jobs, user:user[0]});
          });
        });
      });
    });
  });
});

router.post('/:id', function(req, res, next){
  console.log(req.body)
  let review = req.body.reviews;
  let questions = req.body.questions;
  let stage = req.body.stage;
  let notes = req.body.notes;
  let id = req.param.id;
  if (questions){
    knex('')
  }
  if (review){

  }
  if (review){

  }
  if (review){

  }
  res.json({
    "statusCode":200,
    "results": 'hello world'
  });
});

module.exports = router;
