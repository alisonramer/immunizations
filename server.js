'use strict'

const pg = require('pg');
pg.defaults.poolSize = 0;
const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static('./public'));

app.get('/', function(request, response){
  response.sendFile('index.html', {root: './public'});
});

app.listen(PORT, function(){
  console.log(`server is up and running. and can be accessed at localhost:${PORT}`);
})
