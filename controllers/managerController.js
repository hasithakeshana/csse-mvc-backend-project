
const ManagerDetails = require('../models/manager');

const add_Manager = async(req,res,next) => {

    
    let {name,type} = req.body;
    let data = {name :name,type :type ,};
      
    
    try{
        const response = await ManagerDetails.create(data);
    
        res.send(JSON.stringify({success:"Manager added" , msg : response} ));
      }
      catch(e){
        console.log(e);
      }

}

const get_Manager_By_Id = async(req,res,next) => {

  try{
    
    const response = await ManagerDetails.findOne({"id" : req.params.id});
  
    res.json(response);
  
  }
  catch(e){
    console.log(e);
  }

}

const delete_Manager = async(req,res,next) => {

  try{
        
    const response = await ManagerDetails.deleteOne({id : req.params.id});
    
    res.json(response);
    
}
catch(e){
console.log(e);
}


}

const getAll_Managers = async(req,res,next) => {


  try{
    
    const response = await ManagerDetails.find();
  
    res.json(response);
  
  }
  catch(e){
    console.log(e);
  }

  
}


module.exports = {
    add_Manager,
    get_Manager_By_Id,
    delete_Manager,
    getAll_Managers

}