const express = require('express')
    ,bodyParser = require('body-parser')
    ,swig = require('swig')
    ,riot = require('riot')
    ,tagClientList = require('./app/public/tags/client_list.tag')
    ,tagClientCard = require('./app/public/tags/client_card.tag')
    ,Datastore = require('nedb-promises');

const app = new express();
const dbUsers = new Datastore({filename: './app/db/nedb/users'});

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views',__dirname + '/app/views');
app.use(express.static(__dirname + '/app/public'));
app.use(bodyParser.json());

//-------------------------------------------------------------
// pages
//-------------------------------------------------------------
app.get('/',async function(req,res) {
    let data = await dbUsers.find({});
    let content = riot.render(tagClientList, data);
    res.render('index', {tagContent: content, clients: JSON.stringify(data)});
})
//-------------------------------------------------------------
app.get('/add_user',function(req,res) {
    let data = {
        "clients": []
    }
    let content = riot.render(tagClientCard, data);
    res.render('index', {tagContent: content, clients: []});
})
//-------------------------------------------------------------
// REST API
//-------------------------------------------------------------
app.post('/users',async function(req,res) {
    let newClient = {};
    newClient.firstname = req.body.firstname;
    newClient.middlename = req.body.middlename;
    newClient.lastname = req.body.lastname;
    newClient.phone = req.body.phone;
    await dbUsers.insert(newClient);
    return res.send({});
});
//-------------------------------------------------------------
app.listen(3000, function(){
    console.log('server listening on port 3000');
})