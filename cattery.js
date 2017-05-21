/* cattery.js */
'use strict';

const _ = require('lodash');

let cattery = function() {

  let report = '';

// - - - - - - - - - - - - - - - - - - - - - -
//
// Private methods
//
//
// This gets called if we get a valid response, either 200, 404, 500 etc
// It does not get called if there is no response 
//
	function checkStatus(response) {
	  if (response.status >= 200 && response.status < 300) {
	    return Promise.resolve(response);
	  } else {
	    return Promise.reject("Error retriving data: "+response.status+" "+response.statusText);
	  }
	}

	function parseJson(response) {
	  return response.json();
	}

// Append to the report object
	function add2Report(text) {
		report = report + text + '\n';
		return report;
	}

// - - - - - - - - - - - - - - - - - - - - - -
//
// Public methods
//
	function processCats(owners) {
	//
	// Assuming the data is a list of owners, iterate through them, getting their cats names 
	// into arrays by gender
	//
	  var cats = {};
	  report = '';
	  _.each(owners,owner => {
	    let gender = _.capitalize(owner.gender);			// Be forgiving on male/Male
	    if (!owner.gender) {
	      console.error("Warning: Owner "+owner.name+" has no gender");		// Warn if no gender
	      gender = "None";
	    }
	    if (!cats[gender])
	      cats[gender] = [];
	    _.each(owner.pets,pet => {
	      if (_.capitalize(pet.type) === 'Cat')			// Be forgiving on case of cat/Cat/CaT etc
	        cats[gender].push(pet.name);
	    });
	  });
	  _.each(["Male","Female"],item => {				// Only report on Male/Female
	    add2Report(item);
	    if (cats[item]) {
		    _.each(cats[item].sort(),cat => {
		      add2Report('  '+cat);
		    });
	    }
	  });
	  return report;
	}

//
// These are the public methdds available on the cattery object
//
	return {
		processCats: processCats,
		checkStatus: checkStatus,
		parseJson: parseJson
	};

}();

module.exports = cattery;
