const { Wood } = require("../models");
const fs = require("fs");
const { woodHateoas, woodCollectionHateoas } = require("../helpers/hateoas");

exports.readAll = async (req, res) => {
  try {
    let woods = await Wood.findAll();

    woods = woods.map((wood) => {
      return {
        ...wood.toJSON(),
        links: woodHateoas(wood),
      };
    });

    res.send(woodCollectionHateoas(woods));
  } catch (err) {
    res.status(500).json({
      message: err.message || "erreur lors de la recuperation des woods",
    });
  }
};

exports.readByHardness = async (req, res) => {
  try {
    let woods = await Wood.findAll({
      where: {
        hardness: req.params.hardness,
      },
    });
    woods = woods.map((wood) => {
      return {
        ...wood.toJSON(),
        links: woodHateoas(wood),
      };
    });

    res.send(woodCollectionHateoas(woods));
    
  } catch (err) {
    res.status(500).json({
      message: err.message || "erreur lors de la recuperation des woods",
    });
  }
};

exports.createWood = async (req, res) => {
  try {
    const pathname = `${req.protocol}://${req.get("host")}/uploads/${
      req.file.filename
    }`;

    let wood = await Wood.create({
      ...JSON.parse(req.body.datas), //Transforme les données en format utilisable
      image: pathname,
    });
    wood = {
      ...wood.toJSON(),
      links: woodHateoas(wood),
    };
    res.status(201).json(wood);
  } catch (err) {
    res.status(500).json({
      message:
        err.message ||
        "erreur lors de la creation d’une nouvelle essence de bois.",
    });
  }
};

exports.updateWood = async (req, res) => {
  try {
    const wood = await Wood.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!wood) {
      res.status(404).json({ message: "l'essence de bois n'existe pas" });
    } else {
      let newWood = {
        ...JSON.parse(req.body.datas),
      };
      if (req.file) {
        const pathname = `${req.protocol}://${req.get("host")}/uploads/${
          req.file.filename
        }`;

        newWood = {
          ...newWood,
          image: pathname,
        };

        if (wood.image) {
          const filename = wood.image.split("/uploads/")[1];

          fs.unlink(`uploads/${filename}`, (err) => {
            if (err) {
              console.log(err.message);
            } else {
              console.log("File is Deleted");
            }
          });
        }
      }

      await wood.update(newWood);

      newWood = {
        ...wood.toJSON(),
        links: woodHateoas(wood),
      };
      res.status(200).json(newWood);
    }
  } catch (err) {
    res.status(500).json({
      message: err.message || "erreur lors de la recuperation du wood",
    });
  }
};

exports.deleteWood = async (req, res) => {
  try {
    const wood = await Wood.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!wood) {
      res.status(404).json({ message: "wood not found" });
    } else {
      if (wood.image) {
        const filename = wood.image.split("/uploads/")[1];

        fs.unlink(`uploads/${filename}`, (err) => {
          if (err) {
            console.log(err.message);
          } else {
            console.log("File is Deleted");
          }
        });
      }

      await wood.destroy();
      res.status(204).json();
    }
  } catch (err) {
    res.status(500).json({
      message: err.message || "erreur lors de la recuperation du wood",
    });
  }
};
