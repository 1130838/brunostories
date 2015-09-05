'use strict';

// Use local.env.js for environment variables that grunt will set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
  DOMAIN:           'mongodb://heroku_4bfll4jp:216r8hqtl6bkdln2dn0t0vm4lt@ds035543.mongolab.com:35543/heroku_4bfll4jp',
  SESSION_SECRET:   'brunostories-secret',

  // Control debug level for modules using visionmedia/debug
  DEBUG: ''
};

// http://localhost:9000
