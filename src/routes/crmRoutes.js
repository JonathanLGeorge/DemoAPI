//this file is for our routes

//you will see that inside the {} are the crmControllers we created
import { addNewContact, getContacts, getContactWithID, updateContact, deleteContact} from '../controllers/crmController'


//app was passed from index.js, its our express library 
const routes = (app) => {

    app.route('/contact')
        .get((req, res, next) => {
            // next allows use to create our custom middleware
            //Q: what is middleware?
            //A: express functions that have access to the request and response onjects
            //and act on them 
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        
        }, getContacts)
            //(req,res, next) => {

            //res.send(`GET request suceessful!!! wootwoot!!`)
        //})
        
        
        // .post((req, res) =>
        // res.send(`POST request successful!`));


        //pots endpoint
        .post(addNewContact);

        //our PUT and DELETE wil update a specfic ID
    app.route('/contact/:contactID')
        //used to get specific ID
        .get(getContactWithID)

        // .put((req,res) =>
        // res.send(`PUT request successful!`))

        //updating info for contact
        .put(updateContact)

        // .delete((req, res) =>
        // res.send(`DELETE request successful!`))

        //deleting specific contact 
        .delete(deleteContact)
}
//make sure to add this to our index
export default routes;