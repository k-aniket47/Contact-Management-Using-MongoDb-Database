const mongoose =require('mongoose');

const contactschema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    phone:{
        type: String,
        required:true
    }
})

const Contact = mongoose.model('Contact',contactschema)

module.exports = Contact;