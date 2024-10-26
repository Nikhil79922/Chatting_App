const http=require("http")
const express=require("express")
const path=require("path")
const app =express();
const { Server } = require('socket.io');

const server=http.createServer(app);
const io = new Server(server);

app.use(express.static(path.resolve("./public")))

app.get("/",(req,res)=>{
    res.sendFile("public/index.html")
})

io.on('connection', (socket) => {
    socket.on("user-message",(message)=>{
      io.emit("message",message)
    })
  });

server.listen(8000,()=>{
    console.log("server is running on port 3000")
})