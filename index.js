const http = require("http");
var express = require('express');
const app = express();

app.use('/', express.static('css'));
app.use("/static", express.static('./static/'));

app.get("/", (req,res)=> res.sendFile(__dirname + "/view/index.html"));

app.listen(9091, ()=>console.log("Listening on http port 9091"))
const websocketServer = require("websocket").server
const httpServer = http.createServer();
httpServer.listen(9090, () => console.log("Listening.. on 9090"))
//hashmap clients
const clients = {};
const games = {};

const wsServer = new websocketServer({
    "httpServer": httpServer
})
wsServer.on("request", request => {
    //connect
    const connection = request.accept(null, request.origin);
    connection.on("open", () => console.log("opened!"))
    connection.on("close", () => console.log("closed!"))
    connection.on("message", message => {
        const result = JSON.parse(message.utf8Data)
        //I have received a message from the client
        //a user want to create a new game
        if (result.method === "create") {

            const clientId = result.clientId;
            const gameId = guid();

            games[gameId] = {
                "id": gameId,
                "clients": []
            }

            const payLoad = {
                "method": "create",
                "game" : games[gameId]
            }

            const con = clients[clientId].connection;
            con.send(JSON.stringify(payLoad));
            
            app.use('/', express.static('css'));
            app.use("/static", express.static('./static/'));            
            app.get("/view/game/:guid", (req,res)=> res.sendFile(__dirname + "/view/game.html"));

        }
        
        //a client wants to join
        if (result.method === "join") {

            const clientId = result.clientId;
            const gameId = result.gameId;
            const game = games[gameId]; 
            const name = result.name;
            if (game.clients.length >= 6) 
            {
                return;
            }
            const color =  {"0": "Green", "1": "Red", "2": "Blue"}[game.clients.length]
            game.clients.push({
                "clientId": clientId,
                "color": color,
                "name": name
            })
            //start the game
            const payLoad = {
                "method": "join",
                "game": game
            }

            //loop through all clients and tell them that people has joined
            game.clients.forEach(c => {
                clients[c.clientId].connection.send(JSON.stringify(payLoad))
            })
        }

         //a user starts game
        if (result.method === "start") {
            const gameId = result.gameId;
            const game = games[gameId]; 
           
            const payLoad = {
                "method": "start",
                "game": game
            }

            //loop through all clients and tell them to start
            game.clients.forEach(c => {
                clients[c.clientId].connection.send(JSON.stringify(payLoad))
            })
        }

        //a user goes next turn
        if (result.method === "next") {
            const gameId = result.gameId;
            const game = games[gameId]; 
            const movedHole = result.movedHole;
            const holeMovedFrom = result.holeMovedFrom;
            const recordHops = result.recordHops;

            const payLoad = {
                "method": "next",
                "game": game,
                "movedHole": movedHole,
                "holeMovedFrom": holeMovedFrom,
                "recordHops": recordHops
            }

            //loop through all clients and tell them go next turn
            game.clients.forEach(c => {
                clients[c.clientId].connection.send(JSON.stringify(payLoad))
            })
        }

         //a user starts game
        if (result.method === "newgame") {
           const gameId = result.gameId;
           const game = games[gameId]; 
          
           const payLoad = {
            "method": "newgame"
        }

        //loop through all clients and tell them go next turn
        game.clients.forEach(c => {
            clients[c.clientId].connection.send(JSON.stringify(payLoad))
        })
        }
    })

    //generate a new clientId
    const clientId = guid();
    clients[clientId] = {
        "connection":  connection
    }

    const payLoad = {
        "method": "connect",
        "clientId": clientId
    }
    //send back the client connect
    connection.send(JSON.stringify(payLoad))
})

function S4() {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1); 
}
 
const guid = () => (S4() + S4() + "-" + S4() + "-4" + S4().substr(0,3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();