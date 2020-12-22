class Player {
    constructor(id, name, color, isMyTurn) {
        this.id = id;
        this.name = name;
        this.color = color;
        this.isMyTurn = isMyTurn;
    }
}

const playersInMatch = [];

function goNextPlayer(){
    indexNextPlayer = playersInMatch.findIndex(player => player.isMyTurn)+1;
    getPlayerTurn().isMyTurn = false;

    if(indexNextPlayer === playersInMatch.length)
        indexNextPlayer = 0;

    playersInMatch[indexNextPlayer].isMyTurn = true;
    updateTurnText(getPlayerTurn());
}

function getPlayerTurn(){
   const playerTurn = playersInMatch.find(player => player.isMyTurn);
   return playerTurn;
}

function getGreenPlayer(){
    return playersInMatch[0];
 }
 
 function getRedPlayer(){
    return playersInMatch[1];
 }