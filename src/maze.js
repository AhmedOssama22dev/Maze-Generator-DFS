
let current = grid[0];
let stack = [];
const cells = document.querySelectorAll('.cell');
console.log(cells[grid[0].x*10+grid[0].y]);
let visualizer  = setInterval(animate,100);

function MazeGenerator() {
    cells[current.x*columns+current.y].style.background = 'rgb(245, 114, 31)';
    if(!current.visited){
        current.visited = true;
        stack.push(current);
    }


let unvisited = [];
for(let neighbor of current.neighbors){
    if(!neighbor.visited){
        unvisited.push(neighbor);
    }
}
if(unvisited.length>0){
    let random = Math.floor(Math.random()*unvisited.length);
    let next = unvisited[random];


let x = current.x - next.x;
if(x === 1){
    current.walls[0] = false;
    next.walls[2] = false;
}
else if(x===-1){
    current.walls[2] = false;
    next.walls[0] = false;
}
let y = current.y - next.y;
if(y===1){
    current.walls[3] = false;
    next.walls[1] = false;
}
else if(y===-1){
    current.walls[1] = false;
    next.walls[3] = false;
}
current = next;
}
else if(stack.length>0){
    current = stack.pop();
}
else{
    clearInterval(visualizer);
    cells[current.x*columns + current.y].style.background = 'rgb(239, 93, 65)';
}
}
function animate(){
    for(let i=0;i<rows;i++){
        for(let j=0;j<columns;j++){
            grid[i*columns+j].show();
        }
    }
    MazeGenerator();
}
