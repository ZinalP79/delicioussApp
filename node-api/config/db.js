const mongoose = require('mongoose');
const config = require('./config.json');

mongoose
  .connect(config.database.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected...'))
  .catch((err) => console.log(err));
