//this is our entry point for our server

import express from 'express';

const app = express();
const PORT = 4000;


app.get('/', (req, res) => 
    res.send(`Node and express server running on port ${PORT}`)
);

//sends to console 
app.listen(PORT, () => 
    console.log(`Server is running on port ${PORT}`)
);