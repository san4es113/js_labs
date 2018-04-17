
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
