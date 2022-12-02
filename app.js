import express from 'express';
import mongoose from "mongoose";
import cors from 'cors'
import HelloController
    from "./controllers/hello-controller.js"
import UserController
    from "./controllers/users/user-controller.js"
import TuitsController
    from "./controllers/tuits/tuits-controller.js";

const app = express()
const uri='mongodb+srv://vinsupp99:ICannotTellYou@cluster0.7xkjsdo.mongodb.net/?retryWrites=true&w=majority'
const localURI='mongodb://localhost:27017/tuiter';
async function connect(){
    try{
        await mongoose.connect(uri);
        console.log("Connected To DB");
    }catch(error){
        console.log(error);
    }
}
connect();
app.use(cors())
app.use(express.json());
TuitsController(app);
HelloController(app)
UserController(app)

app.listen(process.env.PORT || 4000)

