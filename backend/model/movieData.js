const mongoose=require('mongoose');
const movieSchema=mongoose.Schema(
    {
        movieName:String,
        category:String,
        directer:String,
        releaseYear:String
    }
)
const movieData=mongoose.model('movie',movieSchema);
module.exports=movieData