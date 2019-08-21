const express = require('express');
const config = require('./config/dev');
const mongoose = require('mongoose');
const Rental = require('./models/rental');
const FakeDb = require('./fake-db');
const rentalRoute = require('./routes/rentals');

mongoose.connect(config.DB_URI, { useNewUrlParser: true }).then(() => {
  const fakeDb = new FakeDb();
  fakeDb.seedDb();
});

const app = express();

app.use('/api/v1/rentals', rentalRoute);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`server running`);
});

