const express = require('express');
var cors = require('cors')
const morgan = require('morgan');
const routes = require('./routes');
const errorHandler = require('./middlewares/errorHandler');
const setupSwagger = require('./docs/swagger');

const app = express();
app.use(cors())
app.use(express.json());
app.use(morgan('dev'));

setupSwagger(app);

app.use('/api/v1', routes);

app.use(errorHandler);

module.exports = app;
