const { Wood } = require('../models');

exports.readAll = async(req, res) => {
    try{
        const woods = await Wood.findAll();
        res.status(200).json(woods);

   }catch(err){
        res.status(500).json({
            message: err.message || "erreur lors de la recuperation des woods"
        }
        );
   }
}

exports.readByHardness = async(req, res) => {
    try{
        const woods = await Wood.findAll({
            where: {
                hardness: req.params.hardness
              }
        });
        res.status(200).json(woods);

   }catch(err){
        res.status(500).json({
            message: err.message || "erreur lors de la recuperation des woods"
        }
        );
   }
}