const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    
    address : {type: String},
    company : {type:String},
    date: { type: Date, default: Date.now },
    items: [{
        price: {type: Number , default:0 },
        quantity : {type : Number ,  default:0 }
            }],
     total :  {type : Number ,  default:0 },
     status : {type : String},
     link : {type : String},
     supplier : {type : String},
     note : {type : String},


        
});

const orders = mongoose.model('orders',orderSchema);


module.exports = orders;