//schema
//this will define what our database excepts 
//go to https://mongoosejs.com/docs/schematypes.html
//for schema types

import mongoose from 'mongoose'

const SChema = mongoose.Schema;

export const ContactSchema = new SChema({
    firstName: {
        type: String,
        required: 'Enter first name'
    },
    lastName: {
        type: String,
        required: 'Enter last name'
    },
    email: {
        type: String,
    },
    company: {
        type: String
    },
    phone: {
        type: Number
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});
