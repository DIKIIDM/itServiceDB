const express = require('express')
     ,swig = require('swig')
     ,riot = require('riot')
     ,tagClientList = require('./app/public/tags/client_list.tag')
     ,tagClientCard = require('./app/public/tags/client_card.tag')
	 ,Datastore = require('nedb');
	 
const app = new express();
const dbUsers = new Datastore({filename: './app/db/nedb/users'});

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views',__dirname + '/app/views');
app.use(express.static(__dirname + '/app/public'));

//-------------------------------------------------------------
app.get('/',function(req,res) {	
  let data = {
	  "clients": []
  }
  dbUsers.loadDatabase();
  dbUsers.find({}, function (err, dbRes) {
	data.clients = dbRes;
	let content = riot.render(tagClientList, data);
	res.render('index', {tagContent: content});
  });
})
//-------------------------------------------------------------
app.get('/add_user',function(req,res) {
    let data = {
        "clients": []
    }
    let content = riot.render(tagClientCard, data);
    res.render('index', {tagContent: content});
})

app.listen(3000, function(){
  console.log('server listening on port 3000');
})

