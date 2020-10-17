const express = require('express');

const testRoutes1 = require('./routes/commiteeRoutes');
const managerRoutes = require('./routes/ManagerRoutes');
const siteManagerRoutes = require('./routes/siteManagerRoutes');
const testRoutes3 = require('./routes/supplierRoutes');
const orderRoutes = require('./routes/orderRoutes');
import * as constants from './constants/constants'

require('dotenv').config();

const mongoose = require('mongoose');

var cors = require('cors');

const app = express();

app.use(cors());

mongoose.Promise = global.Promise;

const uri = constants.MONGO_DB_URL;      // mongo db url

mongoose.connect(uri, { useUnifiedTopology: true   , useFindAndModify: false},()=>{

    console.log("DB connected");
});

app.use(express.json());  //  useNewUrlParser: true, useFindAndModify: false

app.use(express.urlencoded({extended:true}));

//routes

app.use('/test1',testRoutes1);
app.use('/siteManager',siteManagerRoutes);
app.use('/test3',testRoutes3);
app.use('/manager',managerRoutes);
app.use('/orders',orderRoutes);




app.listen( process.env.PORT || 4000,function(){

    console.log('now listening for requests');
});

