import express from "express";
import colors from "colors";
import dotenv from "dotenv"
import morgan from "morgan";
import connectDB from "./Config/db.js";
import authRoutes from "./routes/authRouter.js"
import cors from 'cors'

// configure env
dotenv.config()

// database config
connectDB()

// rest object
const app = express()

// middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))






// Managing Frontend Routing
// app.use(express.static('client/dist'))
// app.get("*", function(req, res){
//     res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
// })



app.use(express.static("./client/dist"));
app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./client/dist/index.html"));
});


// routes
app.use('/api/v1/auth' , authRoutes )

// rest api
// app.get('/', (req, res) => {
//     res.send("<h1>Welcome to ecommerce app</h1>")
// })

// PORT
const PORT = process.env.PORT || 8080

// run listen
app.listen(PORT, () => {
    console.log(`Server running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white)
})