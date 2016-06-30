"use strict";
var express = require('express');
var router = express.Router();
var pg = require("pg");
var knex = require("../db/knex");
var bcrypt = require("bcrypt");

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send("bitch");
  res.render('tempUsers')

  router.post('/', function(req, res, next) {
    knex('jobs').insert({job_title : req.body.job_title, location:req.body.location, status:req.body.status}).then(function(ids) {
        res.json({
            "status": 201,
            "results": { id: ids[0], location: `http://localhost:3000/api/v1/author/${ids[0]}` }

        })
    })

})



  // let id = req.session.id;
  // let id = req.params.id;
  // var userJobs
  // knex('users').select().where('users.id', "=", id).then(function(user){
  //   knex('user_jobs').select('user_jobs.id as user_jobs_id', 'jobs.id as jobs_id', 'user_jobs.notes', 'user_jobs.status', 'jobs.position', 'jobs.link_to_application', 'jobs.salary', 'companies.name').distinct('user_jobs.id')
  //   .innerJoin('jobs', 'user_jobs.job_id', 'jobs.id')
  //   .innerJoin('companies', 'jobs.company_id', 'companies.id')
  //   .where('user_jobs.user_id',"=", id).then(function(info){
  //     console.log(info, 'info')
  //     let userJobIds = info.map(function(job){
  //       return job.id;
  //     });
  //     knex('user_job_stages').select().whereIn('user_job_stages.user_job_id', userJobIds).then(function(stages){
  //       console.log(stages)
  //       info.forEach(function(job){
  //         job.stages = stages.filter(function(stage){
  //           return stage.user_job_id == job.id;
  //         });
  //       });
  //       user[0].jobs = info;
  //       res.json(user[0]);
  //     });
  //   });
  // });

}); //end of router.get


module.exports = router;
