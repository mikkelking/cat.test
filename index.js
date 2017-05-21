/* index.js */
'use strict';

const fetch = require('node-fetch');    // Makes life a little simpler
const _ = require('lodash');
const fs = require('fs');

const cattery = require('./cattery');

const url = 'http://agl-developer-test.azurewebsites.net/people.json';

//
// Start the action here by fetching the data, then calling the cattery module for processing and reporting.
//
fetch(url, {
  method: 'GET',
})
  .then(cattery.checkStatus)
  .then(cattery.parseJson)
  .then(json => {return cattery.processCats(json)})
  .then(report => {console.log(report)})
  .catch(error => {console.error(error);});
