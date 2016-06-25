
exports.up = function(knex, Promise) {
  return Promise.all([

      knex.schema.createTable('users',function(table){
          table.increments('id').primary();
          table.string('first_name');
          table.string('last_name');
          table.string('email');
          table.string('password');
          table.biginteger('phone_number',20);
      }),

      knex.schema.createTable('companies',function (table) {
          table.increments('id').primary();
          table.string('name');
          table.string('location');
          table.biginteger('size');
          table.string('website');
          
      })]).then(function() {
      
        return knex.schema.createTable('jobs',function(table){
            table.increments('id').primary();
            table.string('position');
            table.string('link_to_application');
            table.biginteger('salary');
            table.biginteger('company_id',20).references('id').inTable('companies');
        });
      }).then(function(){
      
        return knex.schema.createTable('user_jobs',function (table) {
            table.increments('id').primary();
            table.biginteger('user_id',20).references('id').inTable('users');
            table.biginteger('job_id',20).references('id').inTable('jobs');
            table.string('status');
            table.string('notes');
        })
      }).then(function () {
      
        return knex.schema.createTable('user_job_stages',function (table) {
            table.increments('id').primary();
            table.biginteger('user_id',20).references('id').inTable('users');
            table.biginteger('user_job_id',20).references('id').inTable('user_jobs');
            table.string('stage');
            table.string('notes');
        })
      }).then(function () {
      
        return knex.schema.createTable('interview_questions',function (table) {
            table.increments('id').primary();
            table.biginteger('user_id',20).references('id').inTable('users');
            table.biginteger('user_job_id',20).references('id').inTable('user_jobs');
            table.biginteger('user_stage',20).references('id').inTable('user_job_stages');
            table.string('question');
        })
      }).then(function () {
      
        return knex.schema.createTable('reviews',function (table) {
            table.increments('id').primary();
            table.biginteger('company_id',20).references('id').inTable('companies');
            table.string('review_text');
        })
      })
};

exports.down = function(knex, Promise) {
  return Promise.all([
      knex.schema.dropTable('reviews'),
      knex.schema.dropTable('interview_questions'),
      knex.schema.dropTable('user_job_stages'),
      knex.schema.dropTable('user_jobs'),
      knex.schema.dropTable('jobs'),
      knex.schema.dropTable('companies'),
      knex.schema.dropTable('users')
  ]);
};
