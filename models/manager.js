const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const managerSchema = new Schema({
    
    name : {type: String},
    password : {type:String},
    type : {type:String},
    site : {type:String}
});

const ManagerData = mongoose.model('manager',managerSchema);


module.exports = ManagerData;