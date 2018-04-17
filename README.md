var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    res.render('pages/template');
});
var json = {"devices":[{ "id": "srfghuhgyjkoijhjnjkjiu78ihy8iu8i", "type": "android", "model": "nokia n200", "status": "connected", "lastSync": 987654345678, "signal": "-100dBm" ,"battery":"50%","location":{"lat":"12.345","lng":"23.345"}}, { "id": "srfghuhg8765456jiu78ihy8iu8i", "type": "android", "model": "xiaomi redmi 4s", "status": "disconnected", "lastSync": 987654345678, "signal": "-80dBm" ,"battery":"40%","location":{"lat":"12.345","lng":"23.345"}}, { "id": "kjhgf6uijhoijui45rt434r", "type": "iOS", "model": "iphone X", "status": "connected", "lastSync": 9876789876789, "signal": "-45dBm" ,"battery":"90%","location":{"lat":"30.345","lng":"-53.345"}},, { "id": "kjhgf6uijhoij2345", "type": "iOS", "model": "iphone X", "status": "connected", "lastSync": 9876789876789, "signal": "-45dBm" ,"battery":"90%","location":{"lat":"3.345","lng":"-53.345"}}, { "id": "kjhgf6uijhoijui458765", "type": "iOS", "model": "iphone X", "status": "connected", "lastSync": 9876789876789, "signal": "-45dBm" ,"battery":"90%","location":{"lat":"22.345","lng":"-53.345"}}, { "id": "kjhgf6uij3456ui45rt434r", "type": "iOS", "model": "iphone 7", "status": "connected", "lastSync": 9876876876789, "signal": "-45dBm" ,"battery":"90%","location":{"lat":"30.345","lng":"-53.345"}}, { "id": "kjhgf6ui45678jui45rt434r", "type": "iOS", "model": "iphone X", "status": "disconnected", "lastSync": 9876789876789, "signal": "-48dBm" ,"battery":"95%","location":{"lat":"12.345","lng":"-53.345"}}, { "id": "kjhgf68765oijui45rt434r", "type": "iOS", "model": "iphone 8S", "status": "connected", "lastSync": 987675678876789, "signal": "-45dBm" ,"battery":"90%","location":{"lat":"55.54966","lng":"37.64506"}}, { "id": "kjhgf6234567jui45rt434r", "type": "iOS", "model": "iphone 6S plus", "status": "disconnected", "lastSync": 9876789876789, "signal": "-45dBm" ,"battery":"94%","location":{"lat":"32.345","lng":"-53.345"}}]}

// devices page 
app.get('/api/devices', function(req, res) {
    res.send(json);
});
app.get('/api/device/id/:id', function(req, res) {
	var data = json.devices;

	for(var i in data){
		var id = data[i].id;
		if(id === req.params.id){
			res.send(data[i]);	
		}
	}

});
app.get('/api/device/status/:status', function(req, res) {
	var data = json.devices;
	var result = {}
	for(var i in data){
		var status = data[i].status;
		if(status === req.params.status){
			result[data[i].id] = data[i]
				
		}
	}
	res.send(result);
});

app.post('/postment', function(req, res) {
    console.log(req.body.name);
});

app.listen(80);
console.log('8080 is the magic port');

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">


<h1>Server api v.2018-04-16<h1>

<body > 
	<div class = "description">
	<ul>
		<li>
			<a href="/api/devices">get all devices</a>
				<li class="template">template: /api/devices</li>
		</li>
		<li>
			<a href="/api/device/id/srfghuhgyjkoijhjnjkjiu78ihy8iu8i">get device from :id param</a>
			<li class="template">template: /api/device/id/srfghuhgyjkoijhjnjkjiu78ihy8iu8i</li>
		</li>
		<li>
			<a href="/api/device/status/connected">get devices from :status param</a>
			<li class="template">template: /api/device/status/connected</li>
		</li>
	</div>

</body> 




<style>
	a{
		text-decoration:none;
	}
	.template {
		color:white;
		font-size:12px;
	}
	body{
		background-color:orange;
		height:1000px;
	}
	.description{
		background-color:#333333;
		margin-left:5%;
		width:90%;
		height:80%;
	}
	.item{
		color:white;
		text-align:center;
	}
</style>
