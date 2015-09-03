'use strict';

// Production specific configuration
// =================================
module.exports = {
  // Server IP
  ip:       process.env.OPENSHIFT_NODEJS_IP ||
            process.env.IP ||
            undefined,

  // Server port
  port:     process.env.OPENSHIFT_NODEJS_PORT ||
            process.env.PORT ||
            8080,

  // MongoDB connection options
  mongo: {
    uri:    process.env.MONGOLAB_URI ||
            process.env.MONGOHQ_URL ||
            process.env.OPENSHIFT_MONGODB_DB_URL+process.env.OPENSHIFT_APP_NAME ||
            // remote mongolab database url:
            'mongodb://heroku_4bfll4jp:216r8hqtl6bkdln2dn0t0vm4lt@ds035543.mongolab.com:35543/heroku_4bfll4jp'
  }
};


//change for this url to use on local db - must run this first! :  ./mongod --dbpath /Users/brunodevesa/IdeaProjects/WebProjects/brunostories/data/db
//'mongodb://localhost/brunostories-dev'
