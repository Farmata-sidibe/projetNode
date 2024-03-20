const { User } = require('../models');
const bcrypt = require("bcrypt");

exports.signup = async(req, res) => {
   try{
        const passwordHash = await bcrypt.hash(req.body.password, 10);
        const user = await User.create({
            ...req.body,
            password: passwordHash
        });
        res.status(201).json(user);

   }catch(err){
        res.status(500).json({
            message: err.message || "erreur lors de la creation du user"
        }
        );
   }
}

exports.login = (req, res) => {
    res.send('You are login');
}