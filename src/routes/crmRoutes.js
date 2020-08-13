//this file is for our routes

//app was passed from index.js, its our express library 
const routes = (app) => {
    app.route('/contact')
        .get((req, res) =>
        res.send(`GET request suceessful!!! wootwoot!!`))
        
        .post((req, res) =>
        res.send(`POST request successful!`));

        //our PUT and DELETE wil update a specfic ID
    app.route('/contact/:contactID')
        .put((req,res) =>
        res.send(`PUT request successful!`))

        .delete((req, res) =>
        res.send(`DELETE request successful!`))
}
//make sure to add this to our index
export default routes;