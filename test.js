#!/usr/local/bin/node
//
'use strict';

const _ = require('lodash');
const assert = require('assert');
const fs = require('fs');

const cattery = require('./cattery');

//
// Sets of json files for tests. 
//
let files = [
	{name: 'Good', input: './testdata/people.good.json', expected: './testdata/cats.good.txt'},
	{name: 'Empty', input: './testdata/people.empty.json', expected: './testdata/cats.empty.txt'},
	{name: 'No cats', input: './testdata/people.nocats.json', expected: './testdata/cats.nocats.txt'},
	{name: 'Bad', input: './testdata/people.bad.json', expected: './testdata/cats.bad.txt'},
];

//
// Iterate through the test sets, finding the cats 
//
_.each(files,s => {
	describe("Results of processing "+s.name, function() {
		let json = JSON.parse(fs.readFileSync(s.input,'utf8'));
		let expected = fs.readFileSync(s.expected,'utf8');
		let report = cattery.processCats(json);
//
// Now check the results and do the assertions
//
    it('should match', function() {
      assert.equal(report, expected);
		});
	});
});
