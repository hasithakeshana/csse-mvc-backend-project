const express = require('express');


const testRoutes1 = require('./routes/commiteeRoutes');
const managerRoutes = require('./routes/ManagerRoutes');
const testRoutes2 = require('./routes/siteManagerRoutes');
const testRoutes3 = require('./routes/supplierRoutes');



require('dotenv').config();

const mongoose = require('mongoose');

var cors = require('cors');

const app = express();

app.use(cors());

mongoose.Promise = global.Promise;

const uri = "";      // mongo db url

mongoose.connect(uri, { useUnifiedTopology: true   , useFindAndModify: false},()=>{

    console.log("DB connected");
});

app.use(express.json());  //  useNewUrlParser: true, useFindAndModify: false

app.use(express.urlencoded({extended:true}));

//routes

app.use('/test1',testRoutes1);
app.use('/test2',testRoutes2);
app.use('/test3',testRoutes3);
app.use('/manager',managerRoutes);



app.listen( process.env.PORT || 4000,function(){

    console.log('now listening for requests');
});

