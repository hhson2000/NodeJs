const express = require('express');
const { engine } = require('express-handlebars');

const morgan = require('morgan');
const path = require('path');
const app = express();
const port = 3000;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));

app.use(morgan('combined'));
app.get('/', (req, res) => {
  res.render('home');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
