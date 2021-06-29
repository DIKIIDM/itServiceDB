const express = require('express')
    ,bodyParser = require('body-parser')
    ,swig = require('swig')
    ,riot = require('riot')
    ,tagClientList = require('./app/public/tags/client_list.tag')
    ,tagClientCard = require('./app/public/tags/client_card.tag')
    ,Client = require('./app/class/Client')
    ,Datastore = require('nedb-promises')
    ,clientRepoNEDB = require('./app/class/ClientRepoNEDB');

const app = new express();
const dbUsers = Datastore.create({filename: './app/db/nedb/clients'});
const clientRepo = new clientRepoNEDB(dbUsers);

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views',__dirname + '/app/views');
app.use(express.static(__dirname + '/app/public'));
app.use(bodyParser.json());

//-------------------------------------------------------------
// pages
//-------------------------------------------------------------
app.get('/clients',async function(req,res) {
    let data = await clientRepo.getAll();
    let content = riot.render(tagClientList, data);
    res.render('index', {tagContent: content, clients: JSON.stringify(data)});
})
//-------------------------------------------------------------
app.get('/clients/add',function(req,res) {
    let data = {
        "clients": []
    }
    let content = riot.render(tagClientCard, data);
    res.render('index', {tagContent: content, clients: []});
})
//-------------------------------------------------------------
app.get('/clients/:id',async function(req,res) {
    let data = await clientRepo.getOne(req.params.id);
    let content = riot.render(tagClientCard, data);
    res.render('index', {tagContent: content, client: JSON.stringify(data)});
})
//-------------------------------------------------------------
// REST API
//-------------------------------------------------------------
app.post('/clients',async function(req,res) {
    let client = new Client(
         null
        ,req.body.firstname
        ,req.body.middlename
        ,req.body.lastname
        ,req.body.phone
        ,clientRepo
    );
    return res.send(await client.insert());
});
//-------------------------------------------------------------
app.put('/clients/:id',async function(req,res) {
    let client = new Client(
         req.params.id
        ,req.body.firstname
        ,req.body.middlename
        ,req.body.lastname
        ,req.body.phone
        ,clientRepo
    );
    return res.send(await client.update());
});
//-------------------------------------------------------------
app.listen(3000, function(){
    console.log('server listening on port 3000');
});
