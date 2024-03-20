require('dotenv').config({path:"../.env"})

const { User } = require('../models');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


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

exports.login = async(req, res) => {
    try{
       
        const user = await User.findOne({ 
            where: { 
                email: req.body.email 
            } 
        });

        if (!user) {
            res.status(404).json({ message: "l'utilisateur n'existe pas" });
          
        } else {

            const passwordIsValid = await bcrypt.compare(
                req.body.password,
                user.password
            );
            if (!passwordIsValid) {
                res.status(401).json({ message: "Mot de passe incorrect" });
            }

            const token = await jwt.sign({id: user.id}, process.env.TOKEN_SECRET, { expiresIn: process.env.JWTExpiration });
            res.status(200).json({
                accessToken: token,
                user: user,
            })

        }

   }catch(err){
        res.status(500).json({
            message: err.message || "Une erreur s'est produite lors de l'authentification"
        }
        );
   }
}