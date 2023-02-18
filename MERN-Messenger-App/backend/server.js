const express = require("express");
const { param } = require("express/lib/request");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const colors = require ("colors");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();
connectDB();
const app = express();


app.use(express.json()); // For accepting Json data 

app.get("/", (req, res) => {
    res.send("API is running");
});

app.get('/api/chat', (req,res)=>{
    res.send(chats);
})
app.get('/api/chat/:id', (req,res)=>{
    // console.log(req);
    const singleChat = chats.find((c)=>c._id === req.params.id);
    res.send(singleChat);
})

app.use('/api/user',userRoutes);
app.use('/api/chat', chatRoutes);


app.use(notFound)
app.use(errorHandler)

const cors = require('cors');
app.use(cors());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});




const PORT = process.env.PORT|| 5001;
app.listen(PORT, console.log(`Server started on port ${PORT}`.yellow.bold));





var corsOptions = {
origin: "*",
credentials: true,
};
app.use(function (req, res, next) {
res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
next();
});
app.use(cors(corsOptions));