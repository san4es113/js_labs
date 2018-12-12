 firebase = require("firebase");
 os = require('os');
 ifaces = os.networkInterfaces();
 express = require('express');        
 app = express();  
 bodyParser = require('body-parser');  
 data = []
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
    
 config = {
    apiKey: "AIzaSyBZ2clweeYEd6o9cPztx1KjgTcA-lGD5Lc",
    authDomain: "lora-220.firebaseapp.com",
    databaseURL: "https://lora-220.firebaseio.com",
    projectId: "lora-220",
    storageBucket: "lora-220.appspot.com",
    messagingSenderId: "575425302330"
  };
  firebase.initializeApp(config);

 database = firebase.firestore()

 collectionName = "Message"
 port = process.env.PORT || 5000;       
 router = express.Router();            

router.get('/', function(req, res) {
    res.status(200).json(data);   
})
    .post('/', function(req, res) {
        console.log(req.body)
        setData(req.body)
        res.status(200).json({ message: 'post data' });   
    })
    .put('/', function(req, res) {
        console.log(req.body)
        updateData(req.params.id,req.body)
        res.status(200).json({ message: 'put data' });   
    })
    .delete('/', function(req, res) {
        removeData(req.params.id)
        res.status(200).json({ message: 'delete data' });   
    });


app.use('/api', router);


app.listen(port);





database.collection(collectionName).onSnapshot((snapshot) => {
    data = []
    snapshot.forEach((doc)=>{
        var human = doc.data()
        human.id = doc.id
        data.push(human)
    })
})

setData = (item) => {
    database.collection(collectionName).add(item)
}
updateData = (id,item) => {
    database.collection(collectionName).doc(id).set(item)
}
removeData = (id) => {
    database.collection(collectionName).doc(id).delete()
}





app.use('/api', router);












console.log('server start on: ' + port);
Object.keys(ifaces).forEach(function (ifname) {
    var alias = 0;
  
    ifaces[ifname].forEach(function (iface) {
      if ('IPv4' !== iface.family || iface.internal !== false) {
        // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
        return;
      }
  
      if (alias >= 1) {
        // this single interface has multiple ipv4 addresses
        console.log(ifname + ':' + alias, iface.address);
      } else {
        // this interface has only one ipv4 adress
        console.log(ifname, iface.address);
      }
      ++alias;
    });
  });
