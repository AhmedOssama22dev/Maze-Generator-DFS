const rows = 10;
const columns = 10;
let grid = [];

class cell{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.walls = [true,true,true,true];
        this.visited = false;
        this.neighbors = [];
    }

    findNeighbors() {
        if(this.x>0){
            this.neighbors.push(grid[(this.x-1)*columns + this.y]);
        }
        if(this.y <columns-1){
            this.neighbors.push(grid[this.x*columns + (this.y+1)]);
        }
        if(this.x<rows-1){
            this.neighbors.push(grid[(this.x+1)*columns+this.y]);
        }
        if(this.y>0){
            this.neighbors.push(grid[this.x*columns + (this.y-1)]);
        }
    }

    show(){
        if(!this.walls[0]){
            cells[this.x*columns+this.y].style['border-top'] = 'none';
        }
        if(!this.walls[1]){
            cells[this.x*columns+this.y].style['border-right'] = 'none';
        }
        if(!this.walls[2]){
            cells[this.x*columns+this.y].style['border-bottom'] = 'none';
        }
        if(!this.walls[3]){
            cells[this.x*columns+this.y].style['border-left'] = 'none';
        }
        if(this.visited){
            cells[this.x*columns+this.y].style.background = 'rgb(224, 114, 89)'
        }
    }
}

const createTable = () => {
    const mazeDiv = document.querySelector('#maze')
    for (let y = 0; y < rows; y++) {
      let row = document.createElement('div');
      row.classList.add('row');
      if (y === 0) row.classList.add('top-row');
      mazeDiv.appendChild(row);
  
      for (let x = 0; x < columns; x++) {
        let column = document.createElement('div');
        column.classList.add('cell');
        if (x === 0) column.classList.add('column-left');
        row.appendChild(column);
      }
    }
}

function makeGrid() {
    for(let i=0;i<rows;i++)
    {
        for(let j=0;j<columns;j++){
            grid.push(new cell(i,j));
        }
    }
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
          grid[i * columns + j].findNeighbors();
        }
      }  
}

createTable();
makeGrid();

console.log(grid[0]);

//https://jmhero05.medium.com/maze-generation-with-depth-first-search-and-recursive-backtracking-f341c8997867