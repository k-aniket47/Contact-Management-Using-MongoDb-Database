const exp = require('constants');
const express = require('express');
const path =require('path');
const port=8888;

const db= require('./config/mongoose');
const Contact = require('./models/contact');

const app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('static'));
var contactlist=[{
    'name':'Aniket',
    'phone':'7209478879'
},
{
    'name':'anmol',
    'phone':'867182492'

},

{
    'name':'djsjs',
    'phone':'298745892'

}
]

app.get('/',function(req,res){

    Contact.find({},function(err,contacts){
        if (err){
            console.log("Error in fetching the Database")
            return;}
        
        return res.render('home',{
            'title':'My Contact List',
            'contactlist':contacts
        
    })
    // return res.render('home',{
    // 'contactlist':contactlist
})
})


app.post('/play',function(req,res){

    Contact.create(req.body,function(err,newContact){
        if (err){
            console.log("Error in Creating the Database")
            return;}
        
        // console.log("*******",newContact)
        
        return res.redirect('back')
    })
    // contactlist.push(req.body);
    // return res.redirect('back')
})




app.get('/play',function(req,res){
    return res.render('play',{
        'title':'you are here'
    })
})



app.listen(port,function(err){
    if (err){
        console.log("error")
        
    }
    console.log("server is running on port :" ,port)

})

app.get('/delete-contact/',function(req,res){
    console.log(req.query);
    let id =req.query.id;

    Contact.findByIdAndDelete(id,function(err){
        if (err){
            console.log("Error in Deleteting the Database")
            return;}

    })

    return res.redirect('back') ;
    
});
