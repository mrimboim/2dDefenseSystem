const express = require("express");
const { engine } = require("express/lib/application");
const ip = require("ip");

const app = express();
const port = 3000; 


app.set('view engine' , 'ejs');
app.use('/assets/exhibitAssets', express.static('assets/exhibitAssets'));
app.use('/assets/2dAssets', express.static('assets/2dAssets'));
// app.use('/node_modules/matter.js', express.static('node_modules/matter-js'))

app.get("/", (req,res) => {
    res.render('exhibit');

    console.log("Exhibit GET request");
})

app.get("/2d", (req,res) => {
    res.render('2d');

    console.log("2D GET request");
})




let webLink = 'http://' + ip.address() + ':' + port;
app.listen(port, () => console.log("listening on port:",port,'\n' + 'Exhibit: ' + '\u001b[' + 44 + 'm' + webLink + '\u001b[0m' + '\n' + '2d: ' + '\u001b[' + 41 + 'm' + webLink + '/2d' + '\u001b[0m' + '\n'));



