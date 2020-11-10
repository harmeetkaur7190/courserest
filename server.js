const express = require('express');
const assert = require('assert');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const dbConfig = require('./config.json').mongo_uri;
const PORT = Number(process.env.PORT || require('./config.json').port);
const courseRoute =require('./route');

const app = express();

//bodyparser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//db connection
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig, {useNewUrlParser:true}).then((res)=>{
    console.log('database connected');
}).catch(err=>{
    console.log(err);
    
});

app.use(cors());

app.use('/',[courseRoute]);//more than one route bind it to array

app.listen(PORT,()=>{
    console.log(`server is running at port http://localhost:${PORT} `);
})