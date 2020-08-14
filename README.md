"# DemoAPI" 

Please remember to download node_modules if you clone this repo

Node Express Babe MongoDB and Mongoose used for this project

You can get MogoDB for your compter at MongoDB.com


optional dependencies 
-body-parser : used to help parse the Json HTTP requests into into our server
-nodemon : this will restart our server for us every time we make a change to our code


What is a Restful API?

We use HTTP protocals to do transactions with a back end
We use GET, POST, PUT, and DELETE calls to the back end
We interact with endpoints created on the back end
    GET will 'get' the data when we need to pull from the back end
    POST will add new data
    PUT updates data
    DELETE deletes stuff 


in package.json you will see

 "scripts": {
    "start": "nodemon ./index.js --exec babel-node -e js"

this is so when we run our server babel will transpile 


MongoDB notes

Database with collections

collections have documents or objects

documents look like JSON onjects

inside each document you have the data with key-value pairs or arrays of items

so our DB contacts, which are in collection , and each conract is a document

robomongo.org can be used for