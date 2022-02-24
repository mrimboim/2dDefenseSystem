const express = require("express");
const { engine } = require("express/lib/application");
const ip = require("ip");

const app = express();
const port = 3000; 


app.set('view engine' , 'ejs');
app.use('/assets', express.static('assets'));

app.get("/", (req,res) => {
    res.render('exhibit');

    console.log("Get request made");
})



let webLink = 'http://' + ip.address() + ':' + port;
app.listen(port, () => console.log("listening on port:",port,'\n' + '\u001b[' + 44 + 'm' + webLink + '\u001b[0m' + '\n'));



