
//  Week 06 Express: Basic Routing
//  My Step working from step 02

//  Import the express library
const express = require('express')

//  Create an instance of express
const app = express()

//  Declare a port to run on
const port = 3000

//  Declare a route

var someRoute = ['/', '/xyz', '/chuchu'];
//app.get(someRoute, (req, res) => res.send('Hello World!'))
app.get('/:Page', (req, res) => res.send("This is page " + req.params.Page))

//  Declaring another route
app.get('/about', (req, res) => res.send('About'))

//  Start Express Web Server i.e. start listing on the port you defined
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
