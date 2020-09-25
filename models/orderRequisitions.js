const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderRequestsSchema = new Schema({
    
    address : {type: String},
    company : {type:String},
    date: { type: Date, default: Date.now },
    items: [{
        price: {type: Number , default:0 },
        quantity : {type : Number ,  default:0 }
            }],
     total :  {type : Number ,  default:0 },
     status : {type : String},
     siteManager : {type : String}   
});

const orders = mongoose.model('orderRequests',orderRequestsSchema);


module.exports = orders;