'use strict';

// Test specific configuration
// ===========================
module.exports = {
  // MongoDB connection options
  mongo: {
    // remote mongolab database url:
    uri: 'mongodb://heroku_4bfll4jp:216r8hqtl6bkdln2dn0t0vm4lt@ds035543.mongolab.com:35543/heroku_4bfll4jp'
  }
};


//change for this url to use on local db - must run this first! :  ./mongod --dbpath /Users/brunodevesa/IdeaProjects/WebProjects/brunostories/data/db
//'mongodb://localhost/brunostories-dev'
