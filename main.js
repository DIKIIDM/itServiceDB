const express = require('express')
     ,swig = require('swig')
     ,riot = require('riot')
     ,tagClientList = require('./app/tags/client_list.tag');
	 
const app = new express();

app.engine('html',swig.renderFile);
app.set('view engine', 'html');
app.set('views',__dirname + '/app/views');
app.use(express.static(__dirname + '/app/public'))

app.get('/',function(req,res) {	
  let data = {
	  "clients": [
		  { name: "Zhena"
			,age: 33
		  }
		  ,{ name: "Denis"
			,age: 31
		  }
		  ,{ name: "Ksu"
			,age: 33
		  }
	  ]
  }
  let content = riot.render(tagClientList, data);
  res.render('index', {tagContent: content});
})
app.listen(3000, function(){
  console.log('server listening on port 3000');
})