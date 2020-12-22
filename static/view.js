 const COLOR_UNSELECTED_GREEN = "#19b100";
 const COLOR_SELECTED_GREEN = "#19f800";
 
 const COLOR_UNSELECTED_RED = "#DC143C";
 const COLOR_SELECTED_RED = "#FFA07A";
 
 const ROW_DISTANCE = 200;
 const COLUMN_DISTANCE = 200;

 //Create all visuals of holes from the holes array
holes.forEach(hole => {
    var holes = document.getElementById("holes");
    var newHole = document.createElement("div");
    newHole.id = hole.id;
    newHole.classList = "holes";
    holes.appendChild(newHole);
    colorHole(hole);
})

let holeCount = 0;
//rows (0-3)
loopDrawRow(0, 3, 1, 1);
//rows (4-8)
loopDrawRow(4, 8, 13, -1);
//rows (9-12)
loopDrawRow(9, 12, 10, 1);
//rows (13-16)
loopDrawRow(13, 16, 4, -1);

//loop through rows with same pattern
//set number of holes of start row, and wether next row inc or dec in total number of holes
function loopDrawRow(startHole, endHole, holesInStartRow, changeNextRow){
   for(startHole; startHole <= endHole; startHole++){
       drawRow(startHole*ROW_DISTANCE, holesInStartRow);
       holesInStartRow += changeNextRow;
    }
}

function drawRow(y, nrOfHoles){
    let x = 0;
    const startX = (nrOfHoles-1)*-(COLUMN_DISTANCE/2); 
    for(let i = 0; i < nrOfHoles; i++){
        setItemPosition(holes[holeCount+i], startX+x, y);
        x += COLUMN_DISTANCE;
    }
    holeCount += nrOfHoles;
}

function setItemPosition(itemToMove, positionX, positionY){
    document.getElementById(itemToMove.id).style.transform = "translate("+positionX+"%,"+positionY+"%)";
}

 function colorHole(hole){
    if(hole.color === HOLE_GREEN_COLOR)
        setHoleColor(hole, COLOR_UNSELECTED_GREEN, COLOR_SELECTED_GREEN);

    else if(hole.color === HOLE_RED_COLOR){
        setHoleColor(hole, COLOR_UNSELECTED_RED, COLOR_SELECTED_RED);

    } else if(hole.color === HOLE_NO_COLOR)
        setItemColor(hole, "#000000");
}

function setHoleColor(hole, unselectedColor, selectedColor){
    setItemColor(hole, unselectedColor);
    if(hole.isSelected)
        setItemColor(hole, selectedColor)     
}

function setItemColor(item, color){
    document.getElementById(item.id).style.backgroundColor = color;
}

function updateTurnText(player){
    document.getElementById("currPlayerText").innerHTML = player.name +"'s turn";
    document.getElementById("currPlayerText").style.color = player.color;
}

function addPlayerWon(player){
    addComponent("modalWon-bg"); 
    document.getElementById("playerWonText").innerHTML = player.name +" won!";
    document.getElementById("playerWonText").style.color = player.color;
}

function addComponent(component){
    document.getElementById(component).style.transform = "scale(1)";
}

function removeComponent(component){
    document.getElementById(component).style.transform = "scale(0)";
}