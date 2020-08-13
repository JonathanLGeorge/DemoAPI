"# DemoAPI" 

Please remember to download node_modules if you clone this repo

Node Express Babe MongoDB and Mongoose used for this project

You can get MogoDB for your compter at MongoDB.com


optional dependencies 
-body-parser : used to help parse the Json HTTP requests into into our server



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