// Creating POST endpoint

import mongoose from 'mongoose'
import {ContactSchema} from '../models/crmModel'


//our contact contructure
//we want to pass the ContactSchema here 
const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = (req,res) => {
    let newContact = new Contact(req.body);

    newContact.save((err, contact) => {
        //error handling
        if (err) {
            res.send(err);
        }
        //getting the contact info in json file with all info that has been saves in data base
        //so if we are provided and ID or anything else we will get that inside json obj
        //so lets pass it to our routes
        res.json(contact)
    })
}