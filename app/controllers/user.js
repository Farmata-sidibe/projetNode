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

        if (user === null) {
            console.log('Not found!');
        } else {

            const passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
            );
            if (!passwordIsValid) {
                const error = new Error("Mot de passe incorrect");
                return res.status(401).json(error);
            }
            let userdata = {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName
            }
            let token = jwt.sign(userdata, process.env.TOKEN_SECRET, { expiresIn: 1440 });
            res.status(200).json({userdata, token: token })

        }

   }catch(err){
        res.status(500).json({
            message: err.message || "erreur lors du login"
        }
        );
   }
}