const expess = require('express')

const socket = require('socket.io')

const app = expess()

// const PORT = process.env.PORT || 3000;

const server = app.listen(3000)

// app.listen(PORT);

app.use(expess.static('public'))

const io = socket(server)

io.on('connection',(socket)=>{

    console.log(socket.id);

    socket.on('chat',data=>{
        io.sockets.emit('chat',data);
    });

    socket.on('typing',data=>{
        socket.broadcast.emit('typing',data);
    })
});
