/*Todo in future:
  Chat
  Error handling when disconnect
  statistics
*/

gameStart.addEventListener('click', function(){
  const payLoad = {
    "method": "start",
    "gameId": gameId
  }

  ws.send(JSON.stringify(payLoad));
});

nextTurnBtn.addEventListener('click', function(){

  const payLoad = {
    "method": "next",
    "gameId": gameId,
    "recordHops": recordHops
  }

  ws.send(JSON.stringify(payLoad));

  movedHole.isSelected = false;
});

undoBtn.addEventListener('click', function(){
  undo();
  removeComponent("undoBtn");
  removeComponent("nextTurnBtn");
});

newGame.addEventListener('click', function(){
  
  const payLoad = {
    "method": "newgame",
    "gameId": gameId,
  }

  ws.send(JSON.stringify(payLoad));
});

  //make holes clickable
document.querySelectorAll('.holes').forEach(hole => {
  hole.addEventListener('click', event => {
    selectHole(event);
    holes.forEach(hole => colorHole(hole));
  })
});