const express = require('express')
const app = express()
const port = 7000;

app.get('/' , function(request , response){
    response .send("Hello from express ")
})

app.listen(port, () => console.log('Example app listening of port ',port))