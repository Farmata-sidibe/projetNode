const { Wood } = require('../models');

exports.listwood = async(req, res) => {
    try{
        const woods = await Wood.findAll();
        console.log(woods.every(user => user instanceof Wood)); // true
        console.log("All woods:", JSON.stringify(woods, null, 2));
        res.status(201).json(woods);

   }catch(err){
        res.status(500).json({
            message: err.message || "erreur lors de la recuperation des woods"
        }
        );
   }
}