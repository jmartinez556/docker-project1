//Load express module with `require` directive
var express = require('express')
var app = express()
//Define port
var port = 3000
//Define request response in root URL (/)
app.get('/', function (req, res) {
    res.send('fuck spiderman')
})
//Launch listening server on port 3000
app.listen(port, function () {
    console.log('this is project1 listening on port ${port}!')
})