const User = require('../models/users')

const login = async(req, res) => {
  
    const hasEmail = await User.findOne({ Email: req.body.Email });
    
    console.log(hasEmail)
    if (hasEmail) {

        if(hasEmail.Password == req.body.Password){
            

            res.json({ Email : true , Password : true})
            
        }
        else{
            res.json({ Email : true , Password : false})
        }

    } else {
      
        res.json({Email : false , Password : false})
  
    }

}

module.exports = login 