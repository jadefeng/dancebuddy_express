var express = require('express');
var app = express();

var hbs = require('hbs');

var danceEngine = require('./dance');
var bodyParser = require('body-parser');
var multer = require('multer');

app.set('view engine', 'html');
app.engine('html', hbs.__express);
app.use(express.bodyParser());
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use(multer()); // for parsing multipart/form-data

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies


app.use(express.static('public'));

app.get('/', function(req, res) {
	res.render('index',{
    title:"Dance Buddy", 
    classrooms:danceEngine.getClassrooms()
  });
});

app.get('/about', function(req, res) {
	res.render('about', {title:"About Me"});
});

app.get('/classroom/new', function(req, res) {
  res.render('new_classroom');
});

app.post('/classroom/new', function(req, res) {
  data = req.body;
  danceEngine.addClassroomEntry(data.name, data.secret);
  res.redirect('/')
});

app.get('/classroom/:id', function(req, res) {
  var classroom = danceEngine.getClassroomEntry(req.params.id);
  var lessons = danceEngine.getClassroomLessons(req.params.id);
  res.render('classroom',{
    id:classroom.id, 
    name:classroom.name, 
    secret:classroom.secret, 
    lessons: lessons,
  });
});

app.get('/classroom/:classroom_id/:entry_id', function(req, res) {

})
app.listen(3000);