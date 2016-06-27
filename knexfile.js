// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection:'postgres://localhost:5432/q2project',
    debug:true
    
  },
  
  staging:{
    client:'pg',
    connection: 'postgres://localhost:5432/q2project'
  },
  
  production: {
    client: 'pg',
    connection: {
      database: 'q2project',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 15
    }
  }

};
