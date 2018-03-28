const express = require('express'),
      massive = require('massive'),
      cors = require('cors'),
      bodyParser = require('body-parser');
const ctrl = require('./controller');
const app = express();
require('dotenv').config();


app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 3030

app.get('/api/shelf/:id', ctrl.readShelves)

app.put('/api/create/:id', ctrl.createBin)

app.get('/api/update/:id', ctrl.readBin)

app.put('/api/update/:id', ctrl.updateBin)

app.put('/api//update/:id', ctrl.deleteBin)


massive(process.env.CONNECTION_STRING).then( db => {
    app.set('db', db)
    app.listen(port, () => {console.log(`Server listening on port ${port}`)})
})