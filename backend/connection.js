const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://jintojoseph:j0fcEYafZ3dFSk9N@cluster0.ympejbw.mongodb.net/internshipmovieDB?retryWrites=true&w=majority&appName=Cluster0')
.then((res)=>{
    console.log('DB connected');
})
.catch((res)=>{
    console.log('DB not connected');
})