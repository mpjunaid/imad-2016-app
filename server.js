var express = require('express');
var morgan = require('morgan');
var path = require('path');

var z={ q:'who is the president of india',
        a:'me',
	b:'you',
	c:'someone',
	d:'everyone'
       };

function create(data){
var q=data.q;
var a=data.a;
var b=data.b;
var c=data.c;
var d=data.d;
var code=`
<!doctype html>
<html>
    <head>
        <link href="/ui/style.css" rel="stylesheet" />
        <script type="text/javascript" src="/ui/main.js"></script>
    </head>
    <body>
        <div class="heading">
           <h1 id="name">QUIZ WORLD</h1>
        </div>
        <div class="hbar">
				<h1>hbar</h2>
	</div>
	
        <div class="question">
                <h1>${q}</h1>
		<h1>${a}</h1>
		<h1>${b}</h1>
		<h1>${c}</h1>
		<h1>${d}</h1>

        </div>
        
        <div class="foot">
             <hr>
             <div class ="text">
                     <p>copy right protected</p>
             </div>
	</div>

    </body>
</html>
`;
return code;
}


var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/z',function (req,res){
    res.send(create(z));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});