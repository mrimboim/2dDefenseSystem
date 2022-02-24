const express = require("express");
const ip = require("ip");
const app = express();
const port = 3000; 

app.get("/", (req,res) => {
    console.log("Here")
    res.send("hi")
})



let webLink = 'http://' + ip.address() + ':' + port;
app.listen(port, () => console.log("listening on port:",port,'\n' + '\u001b[' + 44 + 'm' + webLink + '\u001b[0m' + '\n'));



