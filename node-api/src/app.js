const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const config = require('../config/config.json');
const userroute = require('../routers/user');
const port = config.port;
require('../config/db');

// app.use(express.json());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use('/api', userroute);

app.listen(port, () => {
  console.log('server listening on port ' + port);
});
