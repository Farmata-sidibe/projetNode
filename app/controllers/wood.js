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

exports.createWood = async(req, res) => {
    try{
        
        const pathname = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;

        const wood = await Wood.create({
            ... JSON.parse(req.body.datas), //Transforme les données en format utilisable
            image: pathname,
        });

        res.status(201).json(wood);

   }catch(err){
        res.status(500).json({
            message: err.message || "erreur lors de la creation d’une nouvelle essence de bois."
        }
        );
   }
}