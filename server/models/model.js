// import mongoose to build the model
const mongoose = require('mongoose');

// the model - rules the entries need to follow
const NbaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"],
    },
    image: {
        type: String,
        required: [true, "image is required"],
    },
    point: {
        type: Number,
        required: [true, "points are required"],
    },
    rebound: {
        type: Number,
        required: [true, "rebounds are required"],
    },
    assist: {
        type: Number,
        required: [true, "assists are required"],
    },
    college: {
        type: String,
    },
    teamName: {
        type: String,
        required: [true, "team name is required"],
    },
    teamImage: {
        type: String,
        required: [true, "team image is required"],
    },
    teamRecord: {
        type: String,
        required: [true, "team record is required"],
    },
    teamStanding: {
        type: String,
        required: [true, "team standings are required"],
    },
    favorite: {
        type: Boolean,
        default: false
    },
    
}, {timestamps: true}) // options, adds a created_at and updated_at


const Nba = mongoose.model("Nba", NbaSchema)


module.exports = Nba