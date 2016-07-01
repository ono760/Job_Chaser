"use strict";
var express = require('express');
var router = express.Router();
var pg = require("pg");
var knex = require("../db/knex");
var bcrypt = require("bcrypt");

/* GET users listing. */

router.post('/addjob/:id', function(req, res, next){

  let userID = req.body.user_id;
  let userJobID = req.body.user_job_id;
  //params for adding new job
  let jobTitle = req.body.job_title;
  let jobCompany = req.body.job_company;
  let jobURL = req.body.job_url;
  if(jobURL.indexOf('http') < 0){
    jobURL = 'https://' + jobURL;
  }
  let jobLocation = req.body.job_location;
  //params for notes, questions, etc.
  let review = req.body.reviews;
  let questions = req.body.questions;
  let stage = req.body.stage;
  let notes = req.body.notes;

  knex('companies').select().where('name', 'like', `${jobCompany}%`).then(function(company){
    if(jobCompany){
      knex('companies').select().where('name', 'like', `asdfasdf%`).then(function(company){
        if (company[0] === undefined){
          knex('companies').insert({name:jobCompany, location:jobLocation}).returning('id').then(function(newCompID){
            knex('jobs').insert({position:jobTitle, link_to_application:jobURL, company_id:newCompID[0]}).returning('id').then(function(newJob){
              knex('user_jobs').insert({user_id:userID, job_id:newJob[0]}).then(function(hope) {
                console.log('SUCCCCEESSSS');
                res.redirect(`/users/${userID}`);
                });
              });
            });
          }
        });
      }
    });
});

router.post('/:id', function(req, res, next){
  let userID = req.body.user_id;
  let userJobID = req.body.user_job_id;
  //params for adding new job
  let jobTitle = req.body.job_title;
  let jobCompany = req.body.job_company;
  let jobURL = req.body.job_url;
  let jobLocation = req.body.job_location;
  //params for notes, questions, etc.
  let review = req.body.reviews;
  let questions = req.body.questions;
  let stage = req.body.stage;
  let notes = req.body.notes;
  //insert user notes for a specific job
  knex('user_job_stages').insert({user_id:userID, user_job_id:userJobID, stage:stage, notes:notes, question:questions}).returning('id')
  .then(function(id){
    console.log("Success");
      res.redirect(`/users/${userID}`);
    });
});

// companies for users jobs and all the reviews for companies
router.get('/:id', function(req, res, next) {
  console.log(req.session.user.id)
  let userID = req.session.user.id;
  //access reviews for a specific company
  knex('users').select().where('users.id', '=', userID).then(function(user) {
    knex('user_jobs').select('companies.id as company_id', 'companies.name', 'companies.location').distinct('user_jobs.id')
    .innerJoin('jobs', 'user_jobs.job_id', 'jobs.id')
    .leftJoin('companies', 'jobs.company_id', 'companies.id')
    .where('user_jobs.user_id', "=", userID)
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
        //access a users list of jobs and related info
        knex('user_jobs').select('user_jobs.id as user_jobs_id', 'jobs.id as jobs_id', 'companies.id as company_id', 'jobs.position', 'jobs.link_to_application', 'companies.name').distinct('user_jobs.id')
        .innerJoin('jobs', 'user_jobs.job_id', 'jobs.id')
        .innerJoin('companies', 'jobs.company_id', 'companies.id')
        .where('user_jobs.user_id',"=", userID).then(function(jobs){
          // console.log(jobs, 'jobs')
          let userJobIds = jobs.map(function(job){
            return job.user_jobs_id;
          });
          //access notes, etc. for a users job
          knex('user_job_stages').select().whereIn('user_job_stages.user_job_id', userJobIds).then(function(stages){
            jobs.forEach(function(job){
              job.company = companyMap[job.company_id];
              job.stages = stages.filter(function(stage){
                return stage.user_job_id == job.user_jobs_id;
              });
            });
            // assemble into mega
            user[0].jobs = jobs;
            // console.log(user[0]);
            res.render('users', {id:req.params.id, jobs:user[0].jobs, user:user[0], userID:userID});
          });
        });
      });
    });
  });
});

module.exports = router;
