//this is our entry point for our server

import express from 'express';
import routes from './src/routes/crmRoutes';


const app = express();
const PORT = 4000;


routes(app);

//you can see if we go to our url you can see this in the console
app.get('/', (req, res) => 
    res.send(`Node and express server running on port ${PORT}`)
);

//sends to console 
app.listen(PORT, () => 
    console.log(`Server is running on port ${PORT}`)
);
