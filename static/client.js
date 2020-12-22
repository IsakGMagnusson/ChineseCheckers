  //HTML elements
  var clientId = null;
  var gameId = null;
  let playerColor = null;

  let ws = new WebSocket("ws://localhost:9090")
  const btnCreate = document.getElementById("btnCreate");
  const btnJoin = document.getElementById("btnJoin");
  const txtGameId = document.getElementById("txtGameId");
  const divPlayers = document.getElementById("divPlayers");
  const divBoard = document.getElementById("divBoard");

  ws.onmessage = message => {
      //message.data
      const response = JSON.parse(message.data);
      //connect
      if (response.method === "connect"){
          clientId = response.clientId;
          console.log("Client id Set successfully " + clientId)
      }

      //create the game
      if (response.method === "create"){

          gameId = response.game.id;

          console.log("game successfully created with id " + gameId)
          window.open("http://localhost:9091/view/game/" + gameId, "_self");

      }

      //join the game
      if (response.method === "join"){
          const game = response.game;

          while(divPlayers.firstChild)
              divPlayers.removeChild(divPlayers.firstChild)
  
          game.clients.forEach (player => {
              const playerNameBox = document.createElement("div");
              playerNameBox.style.width = "200px";
              playerNameBox.style.height = "30px";
              playerNameBox.style.background = player.color
              playerNameBox.textContent = player.name;
              playerNameBox.style.fontSize = 'x-large';
              playerNameBox.style.fontWeight = 'bold';
              playerNameBox.style.color = "white";

              divPlayers.appendChild(playerNameBox);

             // if (player.clientId === clientId) playerColor = player.color;
          })
      }

    //start of game
    if (response.method === "start"){
        const game = response.game;

        for(let i = 0; i < game.clients.length; i++){
            if(i === 0){
                let playerGreen = new Player(game.clients[i].clientId, game.clients[i].name, HOLE_GREEN_COLOR, true);
                playersInMatch.push(playerGreen);
              }
              
              if(i === 1){
                let playerRed = new Player(game.clients[i].clientId, game.clients[i].name, HOLE_RED_COLOR, false);
                playersInMatch.push(playerRed);
              }
        }

        removeComponent("startSettings");

        updateTurnText(playersInMatch[0]);
        setStartingHoles();
    }

    //next turn
    if (response.method === "next"){
        const game = response.game;
        const savedHops = response.recordHops;

        //display movement made
        showHopsMadeInTurn(savedHops);

            //Remove buttons at start of turn
        removeComponent("undoBtn");
        removeComponent("nextTurnBtn");
    }

    //new game
    if (response.method === "newgame"){
         reset();
         removeComponent("modalWon-bg");
    }
  }