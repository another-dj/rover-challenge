const marsRover = {
  direction: "N",
  x: 0,
  y: 0,
  path: [{x:0,y:0}]
};
// ======================




// ======================
function turnLeft(rover){

 
  switch(rover.direction){
    case "N":
    rover.direction = "W";
    break;
    case "W":
    rover.direction = "S";
    break;
    case "S":
    rover.direction = "E";
    break;
    case "E":
    rover.direction = "N";
    break;
  }
  console.log(`turnLeft was called. rover is facing ${rover.direction}`);
}


function turnRight(rover){

  switch(rover.direction){
    case "N":
    rover.direction = "E";
    break;
    case "W":
    rover.direction = "N";
    break;
    case "S":
    rover.direction = "W";
    break;
    case "E":
    rover.direction = "S";
    break;
  }
  console.log(`turnRight was called, rover is facing ${rover.direction}`);
}

function moveForward(rover){
let a;
let moved = true;
  switch(rover.direction){
    case "N":
    a = map[rover.x-1][rover.y];
    if ((rover.x-1 >=0) && (a !='w')){
    rover.x--;
    }else
    moved = false;
    break;
    case "W":
    a = map[rover.x][rover.y-1];
    if ((rover.y-1 >=0 )&&(a !='w')){
    rover.y--;
    }else
    moved = false;
    break;
    case "S":
    a = map[rover.x+1][rover.y];
    if ((rover.x+1 <=10)&&(a !='w')){
    rover.x++;
    }else
    moved = false;
    break;
    case "E":
    a = map[rover.x][rover.y+1];
    if ((rover.y+1 <=10) && (a !='w')){
    rover.y++;
    }else
    moved = false;
    break;
  }
  if (moved === true){
  let newPosition = {x: rover.x, y:rover.y};
  rover.path.push(newPosition);
  console.log('rover moved forward');
 }else if (a == 'w')
    console.log('rover cannot move through');
    else
    console.log('rover cant move');
  }



  function moveBackward(rover){

    let a;
    let moved = true;
    switch(rover.direction){
      case "N":
      a =  map[rover.x+1][rover.y];
      if ((rover.x+1 <=10)&&(a !='w')){
      rover.x++;
      }else
      moved = false;
      break;
      case "W":
      a = map[rover.x][rover.y+1];
      if ((rover.y+1 <=10 )&&(a!='w')){
      rover.y++;
      }else
      moved = false;
      break;
      case "S":
      a = map[rover.x-1][rover.y];
      if ((rover.x-1 >=0)&&(a !='w')){
      rover.x--;
      }else
      moved = false;
      break;
      case "E":
      a = map[rover.x][rover.y-1];
      if ((rover.y-1 >=0)&&(a !='w')){
      rover.y--;
      }else
      moved = false;
      break;
    }
    if (moved === true){
    let newPosition = {x: rover.x, y:rover.y};
    rover.path.push(newPosition);
    console.log('rover moved back');
    }else if (a == 'w')
    console.log('rover cannot move through');
    else
    console.log('rover cant move');

  }
  
  
function orders (rover,commands){
  for (let i=0; i<commands.length; i++){
    let order = commands[i];

     switch(order){
    case "f":
    moveForward(rover);
    break;
    case "r":
    turnRight(rover);
    break;
    case "l":
    turnLeft(rover);
    break;
    case "b":
    moveBackward(rover);
    break;
    default:
    console.log('invalid input');
   
  }
  }
     console.log(rover.path);
}

const map = [
  ['','w','','','','','','','','',],
  ['','w','','','','','','','','',],
  ['','w','w','','','','','','','',],
  ['','w','w','w','','','','','','',],
  ['','','','','','','w','','','',],
  ['','','','','','','','','','',],
  ['','','','','','','','','','',],
  ['','','','','','','','','','',],
  ['','','','','','','','','','',],
  ['','','','','','','','','','',]
];

map[marsRover.x][marsRover.y] = 'z';

console.log(map);
  
//orders(marsRover, "lb");
