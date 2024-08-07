const mongoose = require('mongoose');
const movieinfo = require("./movieinfo");

const castdetails = mongoose.Schema({
    castname: {
        type: String,
        required: true,
    },

    castimg: {
        type: String,
        required: true,
    }
})


const copyschema = mongoose.Schema({
    MovieId:
    {
        type: String,
        required: true,
    },

    MovieName:
    {
        type: String,
        required: true,
    },

    imgurl:
    {
        type: String,
        required: true,
    },

    releasedate:
    {
        type: String,
        required: true,
    },

    duration:
    {
        type: String,
        required: true,
    },

    genre:
    {
        type: String,
        required: true,
    },

    about:
    {
        type: String,
        required: true,
    },

    language: {
        type: String,
        required: true,
    },

    cast: {
        type: [castdetails],
        required: true,
    },
    rentdays: {
        type: Number,
        required: true
    }

})



const DocumentSchema = mongoose.Schema({
    city:
    {
        type: String,
        required: true,
    },
    movies: {
        type: [copyschema],
        required: true,
    }

})

const citymovie = mongoose.model('citymovie', DocumentSchema);
module.exports = citymovie;