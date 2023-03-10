const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const { engine } = require ("express-handlebars");
const path = require("path");


app.use(express.static(path.join(__dirname, "public")));



// httlp logger
app.use(morgan("combined"));


app.engine('handlebars', engine({
  extname : ".handlebars"
}));

app.set('view engine', 'handlebars');
app.set("views", "./src/resources/views");

app.get('/home', (req, res) => {
    res.render('home');
});


app.get('/news', (request, respone) => {
   return respone.render('news')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});


