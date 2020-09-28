const Orders = require('../models/orderRequisitions');


const add_order_requests = async(req,res,next) => {

    
    const order = {

       address : req.body.address,
       company : req.body.company,
       date : req.body.date,
       items :req.body.items,
       total : req.body.total,
       status : req.body.status,
       siteManager : req.body.siteManager

    }
      
    
    try{
        const response = await Orders.create(order);
    
        res.json(response);
      }
      catch(e){
        console.log(e);
      }

}



const getAll_Order_Requests = async(req,res,next) => {


  try{
    
    const response = await Orders.find();
  
    res.json(response);
  
  }
  catch(e){
    console.log(e);
  }
}


module.exports = {
   
    add_order_requests,
    getAll_Order_Requests
}