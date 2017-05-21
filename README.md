#Programming challenge

Javascript assignment to fetch json data from a remote API

A json web service has been set up at the url: http://agl-developer-test.azurewebsites.net/people.json

You need to write some code to consume the json and output a list of all the cats in alphabetical order under a heading of the gender of their owner.

You can write it in any language you like. You can use any libraries/frameworks/SDKs you choose.

Submissions which include tests will be looked upon more favourably

Example:

Male
  * Angel
  * Molly
  * Tigger

Female
  * Gizmo
  * Jasper

# Installation

```
git clone https://github.com/mikkelking/cat.test.git
cd cat.test
npm install
```

# Running the program

```
npm start
```

# Running test cases

4 test files have been prepared to test the following:

  * Normal case (data as fetched in above assignment)
  * An empty data file
  * A 'bad' file with some messy data
  * A file with no cats

```
npm test
```
