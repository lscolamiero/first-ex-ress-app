//Require needed modules
const express = require('express')

//Initialize the app object
const app = express()

//Create a homepage route
app.get('/', (req, res) => {
//this gets send to the  client
//(your web browser most likely)
res.send(`<h1>Hello Jane Doe's</h1><br>

Click here for instructions: <a href="/instructions">Click me</a>`)
})

app.get('/instructions', (req, res) => {
    res.send(`<h1>Jane Doe's Handy Express Checklist</h1>

    1- Navigate to my 'code' folder<br>
    2- Make a new folder (named for the project)<br>
    3- Inside the folder create a file called 'index.js'<br>
    4- Open my terminal and navigate to the project folder<br>
    5- Run the command "npm init -y"<br>
    6- Run the command "npm install express"<br>
    7- Open up "index.js"<br>
    8- Require express at the top of the file<br>
    9- Initialiaze the app variable<br>
    10- Create the homepage route<br>
        * Call app.get()<br>
        * Set '/' as the path (first arg)<br>
        * Write callback function with req, res<br>
        * Call res.send('Hello world')<br>
    11- Call app.listen(3001) to keep server open<br>
    <br>
    Click <a href="/">here</a> to go back`)
    })

app.listen(3000, function() {
    console.log('I am awake')
})