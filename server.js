var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
 var articleone={
     title:'Article one |mpjunaid',
     date:'september 5th 201',
     p:'this is my first pages',
     a:'article one'
     
 };
function create(data)  {
var title = data.title;
var date = data.date;
var p = data.p;
var a = data.a;
var html=
` <html>
<head>
    <title>
        ${title}
    </title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
       <link href="/ui/style.css" rel="stylesheet" />
</head>

<body>
    <div class="c">
    <a href='/'>Home</a>
    <h2>${a}</h2>
    <h3>${date}</h3>
    <p>${p}</p>
    </div>
</body>
</html>
`;
return html;
 }
 
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/articleone',function (req,res){
    res.send(create(articleone));
});
app.get('/articletwo',function (req,res){
    res.sendFile(path.join(__dirname, 'ui', 'articletwo.html'));
});
app.get('/articlethree',function (req,res){
 res.sendFile(path.join(__dirname, 'ui', 'articlethree.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
