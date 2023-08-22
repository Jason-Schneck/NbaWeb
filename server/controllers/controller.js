// the controller does CRUD for the db
// import the model here
const Nba = require("../models/model")



// READ ALL - 

module.exports.readAll = (req, res) => {
    Nba.find()
        .then((allNba) => {
            res.json(allNba)
        })
        .catch((err) => res.json(err))
}


// READ ONE - 

module.exports.readOne = (req, res) => {
    Nba.findById(req.params.id) // findById means you dont need to pass in the _id
        .then(oneSingleNba => {
            res.json(oneSingleNba)
        })
        .catch((err) => {
            res.json(err)
        });
}


// CREATE 
module.exports.create = (req, res) => {
    Nba.create(req.body)
        .then(newNba => {
            res.json(newNba)
        })
        .catch((err) => {
            res.status(400).json(err) // need status(400) for create 
        });
}


// UPDATE
module.exports.update = (req, res) => {
    Nba.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedNba => {
            res.json(updatedNba)
        })
        .catch((err) => {
            res.status(400).json(err)
        });
}



// DELETE 
module.exports.delete = (req, res) => {
    Nba.findByIdAndDelete(req.params.id)
        .then(result => {
            res.json(result)
        })
        .catch((err) => {
            res.json(err)
        });
}