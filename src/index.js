const express = require('express');
const newsController = require('./app/controllers/NewsController');
const { engine } = require('express-handlebars');

const morgan = require('morgan');
const path = require('path');
const { equal } = require('assert');
const app = express();
const port = 3000;
const route = require('./routes');
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

route(app);
//app.use(morgan('combined'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
