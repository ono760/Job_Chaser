
exports.seed = function(knex, Promise) {
    return Promise.all([
        Promise.all([
            knex('reviews').del()
        ])
            .then(function () {
                knex('interview_questions').del()
            })
            .then(function () {
                knex('user_job_stages').del()
            })
            .then(function () {
                knex('user_jobs').del()
            })
            .then(function () {
                knex('jobs').del()
            })
            .then(function () {
                knex('companies').del()
            })
            .then(function () {
                knex('users').del()

            })
    ])
        //insert seed data to each table
        .then(function () {
            return Promise.all([
                // Inserts seed entries
                knex('users').insert({id: 1, first_name: 'joe', last_name: 'smith', email:'joesmith@abc.com',password:'adhakdh',phone_number:'5555555555'}),
                knex('users').insert({id: 2, first_name: 'alex', last_name: 'tom', email:'alextom@abc.com',password:'qweiuqowe',phone_number:'4444444444'}),
                knex('users').insert({id: 3, first_name: 'eric', last_name: 'willis', email:'ericwillis@abc.com',password:'mxzdj',phone_number:'3333333333'})
            ]);
        })
        .then(function () {
            return Promise.all([
                knex('companies').insert({id:1, name:'google', location: 'mountain view', size:'57000', website:'google.com'}),
                knex('companies').insert({id:2, name:'facebook', location: 'palo alto', size:'13000', website:'facebook.com'}),
                knex('companies').insert({id:3, name:'apple', location: 'cupertino', size:'66000', website:'apple.com'})
            ]);
        })
        .then(function () {
            return Promise.all([
                knex('jobs').insert({id:1, position:'front-end engineer', link_to_application:'indeed.com', salary:'100000',company_id:1}),
                knex('jobs').insert({id:2, position:'back-end engineer', link_to_application:'indeed.com', salary:'120000',company_id:2}),
                knex('jobs').insert({id:3, position:'full-stack engineer', link_to_application:'indeed.com', salary:'150000',company_id:3})
            ]);
        })
        .then(function () {
            return Promise.all([
                knex('user_jobs').insert({id:1, user_id:1, job_id:1, status:'pending', notes:'great environment'}),
                knex('user_jobs').insert({id:2, user_id:2, job_id:2, status:'complete', notes:'takes a while to respond'}),
                knex('user_jobs').insert({id:3, user_id:3, job_id:3, status:'complete', notes:'nice facility'})
            ]);
        })
        .then(function () {
            return Promise.all([
                knex('user_job_stages').insert({id:1, user_id:1, user_job_id:1, stage:'phone-screen', notes:'calls from blocked number'}),
                knex('user_job_stages').insert({id:2, user_id:2, user_job_id:2, stage:'first round', notes:'may make you code in word doc'}),
                knex('user_job_stages').insert({id:3, user_id:3, user_job_id:3, stage:'on-site', notes:'interview with lead engineer'})
            ]);
        })
        .then(function () {
            return Promise.all([
                knex('interview_questions').insert({id:1, user_id:1, user_job_id:1, user_stage:1, question:'asked about binary search'}),
                knex('interview_questions').insert({id:2, user_id:2, user_job_id:2, user_stage:2, question:'asked about java instead of javascript'}),
                knex('interview_questions').insert({id:3, user_id:3, user_job_id:3, user_stage:3, question:'need to brush up on object-oriented programming'})
            ]);
        })
        .then(function () {
            return Promise.all([
                knex('reviews').insert({id:1,company_id:1,review_text:'good atmosphere'}),
                knex('reviews').insert({id:2,company_id:2,review_text:'no parking lot'}),
                knex('reviews').insert({id:3,company_id:3,review_text:'dog-friendly'})
            ]);
        });
    // Deletes ALL existing entries
};

