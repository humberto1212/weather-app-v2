//Data Erray endpoint
const data = [];

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');

/* body-parser & Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Running local server
const port = 8080;

const server = app.listen (port, ()=>{console.log(`Im listening to the server: ${port}`)});

//Get Route
app.get('/all', (req, res)=>{res.send(data);});  
  
//Post Route
app.post('/add', WeatherAndInfo);

function WeatherAndInfo(req, res) {
  let grados = " °C" 
  let newData = req.body;
  let newEntry = {
    date: newData.date,
    temp: newData.temp + grados,
    content: newData.content
  }
  data.unshift(newEntry);
  res.send(data);
  console.log(data);
}
