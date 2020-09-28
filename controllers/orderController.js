const Orders = require('../models/order');



const place_order = async(req,res,next) => {

    
    const order = {

       address : req.body.address,
       company : req.body.company,
       date : req.body.date,
       items :req.body.items,
       total : req.body.total,
       status : req.body.status,
       link : req.body.link,
       supplier : req.body.supplier,
       note : req.body.note,

       

    }
      
    
    try{
        const response = await Orders.create(order);
    
        res.send(JSON.stringify({success:"order created" , msg : response} ));
      }
      catch(e){
        console.log(e);
      }

}



const getAll_Orders = async(req,res,next) => {


    try{
      
      const response = await Orders.find();
    
      res.json(response);
    
    }
    catch(e){
      console.log(e);
    }
  }



module.exports = {
   
    place_order,
    getAll_Orders
    
}