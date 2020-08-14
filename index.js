//this is our entry point for our server

import express from 'express';
import routes from './src/routes/crmRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser'


const app = express();
const PORT = 4000;

//mongoose connection
//this promise will make it so we wait for result when conecting to mogoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
    //these options will make sure we dont get error when connecting?
});

//bodyparser setup
//we are letting the bodyParser to parse the requests that are coming in 
//to make it  readable to our API
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


routes(app);

//serving static files (img, pdf, txt, movies, ect...)
//public is our static files folder
app.use(express.static('public'));



//you can see if we go to our url you can see this in the console
app.get('/', (req, res) => 
    res.send(`Node and express server running on port ${PORT}`)
);

//sends to console 
app.listen(PORT, () => 
    console.log(`Server is running on port ${PORT}`)
);
