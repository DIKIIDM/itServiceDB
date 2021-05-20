const express = require('express')
    ,bodyParser = require('body-parser')
    ,swig = require('swig')
    ,riot = require('riot')
    ,tagClientList = require('./app/public/tags/client_list.tag')
    ,tagClientCard = require('./app/public/tags/client_card.tag')
    ,Client = require('./app/class/Client')
    ,Dog = require('./app/class/Dog')
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
app.get('/clients',async function(req,res) {
    let data = await dbUsers.find({});
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
    let data = await dbUsers.findOne({_id: req.params.id});
    let content = riot.render(tagClientCard, data);
    res.render('index', {tagContent: content, client: JSON.stringify(data)});
})
//-------------------------------------------------------------
// REST API
//-------------------------------------------------------------
app.post('/users',async function(req,res) {
    let result = {
         success: false
        ,message: ""
    };
    let client = new Client(
                   req.body.firstname
                  ,req.body.middlename
                  ,req.body.lastname
                  ,req.body.phone
                );
    //проверка
    let clients = await dbUsers.find({phone: client.phone});
    if (clients.length === 0) {
        dbUsers.insert(client, function (err, dbRes) {});
        result.success = true;
    } else {
        result.message = "Ошибка! Такой телефон уже существует";
    }
    return res.send(result);
});
//-------------------------------------------------------------
app.listen(3000, function(){
    console.log('server listening on port 3000');
});
