exports.up = function(knex, Promise) {
    return Promise.all([

        knex.schema.createTable('users', function(table) {
            table.increments('id').primary();
            table.string('first_name').notNullable();
            table.string('last_name').notNullable();
            table.string('email').unique();

            table.string('linkedin_id').unique(); //added

            table.string('password');
            table.biginteger('phone_number', 20);
        }),

        knex.schema.createTable('companies', function(table) {
            table.increments('id').primary();
            table.string('name');
            table.string('location');

        })
    ]).then(function() {

        return knex.schema.createTable('jobs', function(table) {
            table.increments('id').primary();
            table.string('position');
            table.string('link_to_application');
            table.biginteger('company_id', 20).references('id').inTable('companies').onDelete('cascade');
        });
    }).then(function() {

        return knex.schema.createTable('user_jobs', function(table) {
            table.increments('id').primary();
            table.biginteger('user_id', 20).references('id').inTable('users').onDelete('cascade');
            table.biginteger('job_id', 20).references('id').inTable('jobs').onDelete('cascade');
        });
    }).then(function() {

        return knex.schema.createTable('user_job_stages', function(table) {
            table.increments('id').primary();
            table.biginteger('user_id', 20).references('id').inTable('users').onDelete('cascade');
            table.biginteger('user_job_id', 20).references('id').inTable('user_jobs').onDelete('cascade');
            table.string('stage');
            table.string('notes');
            table.string('question');
        });
    }).then(function() {

        return knex.schema.createTable('reviews', function(table) {
            table.increments('id').primary();
            table.biginteger('company_id', 20).references('id').inTable('companies').onDelete('cascade');
            table.string('review_text');
        });
    });
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
