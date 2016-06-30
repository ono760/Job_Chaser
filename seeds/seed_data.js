exports.seed = function(knex, Promise) {
return Promise.all([
    Promise.all([
        knex('reviews').del()
    ])
        .then(function () {
            knex('interview_questions').del();
        })
        .then(function () {
            knex('user_job_stages').del();
        })
        .then(function () {
            knex('user_jobs').del();
        })
        .then(function () {
            knex('jobs').del();
        })
        .then(function () {
            knex('companies').del();
        })
        .then(function () {
            knex('users').del();

        })
])
        //insert seed data to each table
        .then(function () {
            return Promise.all([
                // Inserts seed entries
                knex('users').insert({first_name: 'joe', last_name: 'smith', email:'joesmith@abc.com',password:'adhakdh',phone_number:'5555555555'}),
                knex('users').insert({first_name: 'alex', last_name: 'tom', email:'alextom@abc.com',password:'qweiuqowe',phone_number:'4444444444'}),
                knex('users').insert({first_name: 'eric', last_name: 'willis', email:'ericwillis@abc.com',password:'mxzdj',phone_number:'3333333333'})
            ]);
        })
        .then(function () {
            return Promise.all([
                knex('companies').insert({name:'google', location: 'mountain view'}),
                knex('companies').insert({name:'facebook', location: 'palo alto'}),
                knex('companies').insert({name:'apple', location: 'cupertino'}),

            ]);
        })
        .then(function () {
            return Promise.all([
                knex('jobs').insert({position:'front-end engineer', link_to_application:'indeed.com',company_id:1}),
                knex('jobs').insert({position:'back-end engineer', link_to_application:'indeed.com', company_id:2}),
                knex('jobs').insert({position:'full-stack engineer', link_to_application:'indeed.com',company_id:3}),
                knex('jobs').insert({position:'Jr. Java Dev', link_to_application:'indeed.com',company_id:1}),
                knex('jobs').insert({position:'Sr. C++ Dev', link_to_application:'indeed.com',company_id:2}),
                knex('jobs').insert({position:'CEO', link_to_application:'indeed.com',company_id:1}),
                knex('jobs').insert({position:'Web Application Intern', link_to_application:'indeed.com',company_id:3}),
                knex('jobs').insert({position:'Web Developer II', link_to_application:'indeed.com',company_id:3}),
                knex('jobs').insert({position:'Jr. Android Developer I', link_to_application:'indeed.com',company_id:2}),
                knex('jobs').insert({position:'Programmer Analyst', link_to_application:'indeed.com',company_id:1}),
                knex('jobs').insert({position:'Application Software engineer', link_to_application:'indeed.com',company_id:2}),
                knex('jobs').insert({position:'Mobile Software Developer', link_to_application:'indeed.com',company_id:1}),
                knex('jobs').insert({position:'Programmer Analyst III', link_to_application:'indeed.com',company_id:1}),
                knex('jobs').insert({position:'Programmer Analyst V', link_to_application:'indeed.com',company_id:3}),
                knex('jobs').insert({position:'Web Analyst I', link_to_application:'indeed.com',company_id:2}),
                knex('jobs').insert({position:'Android Developer II', link_to_application:'indeed.com',company_id:2}),
                knex('jobs').insert({position:'Swift Developer II', link_to_application:'indeed.com',company_id:3}),
                knex('jobs').insert({position:'Sr. Android Developer', link_to_application:'indeed.com',company_id:1}),
                knex('jobs').insert({position:'Apple Customer Service Rep. I', link_to_application:'indeed.com',company_id:3}),
                knex('jobs').insert({position:'Sr. DevOps Engineer', link_to_application:'indeed.com',company_id:2}),
                knex('jobs').insert({position:'Customer Relations Manager', link_to_application:'indeed.com',company_id:2})

            ]);
        })
        .then(function () {
            return Promise.all([
                knex('user_jobs').insert({user_id:1, job_id:1}),
                knex('user_jobs').insert({user_id:2, job_id:2}),
                knex('user_jobs').insert({user_id:3, job_id:3}),
                knex('user_jobs').insert({user_id:2, job_id:21}),
                knex('user_jobs').insert({user_id:3, job_id:6}),
                knex('user_jobs').insert({user_id:1, job_id:5}),
                knex('user_jobs').insert({user_id:2, job_id:7}),
                knex('user_jobs').insert({user_id:2, job_id:9}),
                knex('user_jobs').insert({user_id:3, job_id:4}),
                knex('user_jobs').insert({user_id:1, job_id:8}),
                knex('user_jobs').insert({user_id:2, job_id:10}),
                knex('user_jobs').insert({user_id:3, job_id:11}),
                knex('user_jobs').insert({user_id:2, job_id:12}),
                knex('user_jobs').insert({user_id:1, job_id:12})

            ]);
        })
        .then(function () {
            return Promise.all([
                knex('user_job_stages').insert({user_id:2, user_job_id:1, stage:'phone-screen', notes:'calls from blocked number', question:'asked about binary search, fizz buzz, proudest project'}),
                knex('user_job_stages').insert({user_id:1, user_job_id:2, stage:'first round', notes:'may make you code in word doc', question:'asked about java instead of javascript, RESTful API, UX/UI'}),
                knex('user_job_stages').insert({user_id:3, user_job_id:3, stage:'on-site', notes:'interview with lead engineer', question:'OOP vs functional programming, fizz buzz, jQuery fundamentals'}),
                knex('user_job_stages').insert({user_id:2, user_job_id:4, stage:'on-site', notes:'interview with engineer II', question:'Any c++ experience?, why I am i interested in programming, bunch of toy javascript problems'}),
                knex('user_job_stages').insert({user_id:3, user_job_id:5, stage:'in-person', notes:'interview with recruiter', question:'Years of programming experience?, where I see my career in 5 years, what other languages I want to learn'}),
                knex('user_job_stages').insert({user_id:1, user_job_id:6, stage:'phone-screen round 1', notes:'interview senior recruiter', question:'worst coding error?, bunch of toy javascript problems, what salary am I looking for'}),
                knex('user_job_stages').insert({user_id:2, user_job_id:7, stage:'skype screen', notes:'interview with lead engineer from developer team', question:'bunch of toy javascript problems, what CSS frameworks do I know well, the Stack vs the Heap'}),
                knex('user_job_stages').insert({user_id:2, user_job_id:8, stage:'phone interview', notes:'interview with sr. software developer', question:'how would you rate your programming skills?, asked about binary search, OOP vs Functional programming'}),
                knex('user_job_stages').insert({user_id:3, user_job_id:9, stage:'on-site', notes:'interview with HR', question:'fizz buzz, how to make a booklist, years of programming experience?'}),
                knex('user_job_stages').insert({user_id:1, user_job_id:10, stage:'on-site', notes:'met with sr. recruiter', question:'why am I interested in programming, where did I go to school, any experience with Python'}),
                knex('user_job_stages').insert({user_id:2, user_job_id:11, stage:'skype', notes:'interview with CEO', question:'any experience with Ruby on Rails, RESTful API and CRUD, Node and Express modules'}),
                knex('user_job_stages').insert({user_id:3, user_job_id:12, stage:'in person', notes:'interview with android engineer', question:'tabs vs spaces, will the real slim shady please stand up?, proudest project'}),
                knex('user_job_stages').insert({user_id:2, user_job_id:13, stage:'skype second round', notes:'interview with lead engineer III', question:'chicken or fish, coke or pepsi, red or white wine'}),
                knex('user_job_stages').insert({user_id:1, user_job_id:14, stage:'phone screen round 3', notes:'interview with HR manager', question:'where do I see myself in 10 years, what other languages I want to learn, bunch of toy javascript problems'})
            ]);
        })
        // .then(function () {
        //     return Promise.all([
        //         knex('interview_questions').insert({user_id:1, user_job_id:1, user_job_stage_id:1, question:'asked about binary search, fizz buzz, proudest project'}),
        //         knex('interview_questions').insert({user_id:2, user_job_id:2, user_job_stage_id:2, question:'asked about java instead of javascript, RESTful API, UX/UI'}),
        //         knex('interview_questions').insert({user_id:3, user_job_id:3, user_job_stage_id:3, question:'OOP vs functional programming, fizz buzz, jQuery fundamentals'}),
        //         knex('interview_questions').insert({user_id:3, user_job_id:4, user_job_stage_id:4, question:'Any c++ experience?, why I am i interested in programming, bunch of toy javascript problems'}),
        //         knex('interview_questions').insert({user_id:2, user_job_id:5, user_job_stage_id:5, question:'Years of programming experience?, where I see my career in 5 years, what other languages I want to learn'}),
        //         knex('interview_questions').insert({user_id:1, user_job_id:6, user_job_stage_id:6, question:'worst coding error?, bunch of toy javascript problems, what salary am I looking for'}),
        //         knex('interview_questions').insert({user_id:3, user_job_id:7, user_job_stage_id:7, question:'bunch of toy javascript problems, what CSS frameworks do I know well, the Stack vs the Heap'}),
        //         knex('interview_questions').insert({user_id:1, user_job_id:8, user_job_stage_id:8, question:'how would you rate your programming skills?, asked about binary search, OOP vs Functional programming'}),
        //         knex('interview_questions').insert({user_id:1, user_job_id:9, user_job_stage_id:9, question:'fizz buzz, how to make a booklist, years of programming experience?'}),
        //         knex('interview_questions').insert({user_id:1, user_job_id:10, user_job_stage_id:10, question:'why am I interested in programming, where did I go to school, any experience with Python'}),
        //         knex('interview_questions').insert({user_id:1, user_job_id:11, user_job_stage_id:11, question:'any experience with Ruby on Rails, RESTful API and CRUD, Node and Express modules'}),
        //         knex('interview_questions').insert({user_id:1, user_job_id:12, user_job_stage_id:12, question:'tabs vs spaces, will the real slim shady please stand up?, proudest project'}),
        //         knex('interview_questions').insert({user_id:1, user_job_id:13, user_job_stage_id:13, question:'chicken or fish, coke or pepsi, red or white wine'}),
        //         knex('interview_questions').insert({user_id:1, user_job_id:14, user_job_stage_id:14, question:'where do I see myself in 10 years, what other languages I want to learn, bunch of toy javascript problems'})
        //     ]);
        // })
        .then(function () {
            return Promise.all([
                knex('reviews').insert({company_id:1,review_text:'good atmosphere'}),
                knex('reviews').insert({company_id:2,review_text:'no parking lot'}),
                knex('reviews').insert({company_id:1,review_text:'rude manager'}),
                knex('reviews').insert({company_id:3,review_text:'friendly atmosphere'}),
                knex('reviews').insert({company_id:2,review_text:'competitive environment'}),
                knex('reviews').insert({company_id:1,review_text:'rewarding but exhausting'}),
                knex('reviews').insert({company_id:2,review_text:'do not like dogs on facilities'}),
                knex('reviews').insert({company_id:1,review_text:'have to pay for parking lot'}),
                knex('reviews').insert({company_id:3,review_text:'cat friendly!'}),
                knex('reviews').insert({company_id:2,review_text:'cat friendly!'}),
                knex('reviews').insert({company_id:1,review_text:'no parking lot!'}),
                knex('reviews').insert({company_id:3,review_text:'cat friendly!'})
            ]);
        });
    // Deletes ALL existing entries
};
