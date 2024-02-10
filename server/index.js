const express = require("express");
const cors = require("cors");  
const userRoutes = require("./routes/userRoutes");
const messageRoute= require("./routes/messagesRoute");
const socket = require("socket.io");
// require(id: string): any
const mongoose = require("mongoose");

const app = express();
require("dotenv").config();



app.use(cors());
app.use(express.json());
app.use("/api/auth",userRoutes)

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

  // app.use("/api/auth", userRoutes);
   app.use("/api/messages", messageRoute);

const server = app.listen(process.env.PORT, () =>{
  console.log(`Server started on ${process.env.PORT}`)
}
);
const io =socket(server,{
  cors:{
    origin:"http://localhost:3000",
    credential:true,
  }
});
global.onlineUsers = new Map();
io.on("connection",(socket)=>{
  global.chatSocket = socket;
  socket.on("add-user",(userId)=>{
    onlineUsers.set(userId, socket.io);
  });
  socket.on("send-msg",(data)=>{
    // console.log("sendmsg",{data});
    const sendUserSocket = onlineUsers.get(data.to);
    if(sendUserSocket){
      socket.to(sendUserSocket).emit("msg-recieve", data.message);
    }
  })

})

