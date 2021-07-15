// java script concepts to learn thoroughly
// 1. coersion: 
// 2.scope
// 3.true nature of objects
// understand prototypes and prototypal inheritance
// 4. "this" the binding for this keyword occurs with every function invocation
// 5. the power of functions: functions are class;closure;
//immediately invoked function expressions (IIEF)
 //6.the namespace/ module pattern
  document .addEventListener('DOMContentLoaded',()=>{
 const grid = document.querySelector('.grid');
 let squares = Array.from(document.querySelectorAll('.grid div'));
 const ScoreDisplay = document.querySelector('#score');
 const StastBtn = document.querySelector('#start-button');
 const width = 10;
//the tetriminoes
const lTetrimino = [
      [1,width+1,width*2+1,2],
      [width,width+1,width+2,width*2+2],
      [1,width+1,width*2+1,width*2],
      [width,width*2,width*2+1,width*2+2]
    ]

  const zTetrimino = [
    [0,width,width+1, width*2+1],
    [width+1,width+2,width*2,width*2+1],
    [0,width,width+1,width*2+1],
    [width+1,width+2,width*2,width*2+1]
  ]

  const tTetrimino = [
    [1,width,width+1,width+2],
    [1,width+1,width+2,width*2+1],
    [width,width+1,width+2,width*2+1],
    [1,width,width+1,width*2+1]
  ]

  const oTetrimino = [
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1]
  ]

  const iTetrimino = [
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3],
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3]
  ]
const theTetriminos = [ lTetrimino , zTetrimino, tTetrimino, oTetrimino, iTetrimino]
 
let currentPosition = 4
let currentRotation = 0

//randomly select tetrimino
let random = Math.floor(Math.random()*theTetriminos.length)
console.log(random)
let current = theTetriminos[random][currentRotation]

// draw the tetrimino
function draw(){
current.forEach(index =>{
    squares[currentPosition + index].classList.add('tetrimino')
})

}
// undraw the tetrimino
function undraw(){
    current.forEach(index => {
        squares[currentPosition + index].classList.remove('tetrimino');
    })
}

// make the tetrimino move down every second
timerId = setInterval(moveDown, 850);

// assign functions to keyCodes
function control(e){
  if(e.keyCode === 37){
    moveLeft()
    
  }
  else if(e.keyCode === 38){
    // rotate
  }
  else if(e.keyCode === 39){
    moveRight()
  }
  else if(e.keyCode === 40){
 moveDown()
  }
}

document.addEventListener('keyup', control)
// move down function
function moveDown(){
    undraw();
    currentPosition += width;
    draw();
    freeze();
}
// freeze function

function freeze(){
    if(current.some(index => squares[currentPosition + index + width].classList.contains('taken'))) {
        current.forEach(index => squares[currentPosition + index].classList.add('taken'));
//    random tetrimino falling
random = Math.floor(Math.random() * theTetriminos.length)
current=theTetriminos[random][currentRotation];
currentPosition = 4;
draw()
    }
}

// move the tetrimino left, unless it is at the edge or there is a blockage
function moveLeft() {
  undraw()
  const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0)
  if(!isAtLeftEdge) currentPosition -=1
  if(current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
    currentPosition +=1
  }
  draw()

}
//  move the tetrimino right unless it is at the edge or there is a blockage
function moveRight(){
  undraw()
  const isAtRightEdge = current.some(index => (currentPosition + index) % width === width -1)
  if(!isAtRightEdge) currentPosition +=1
  if(current.some(index => squares[currentPosition + index].classList.contains('taken'))){
    currentPosition -=1
}
draw()
}




























  })

// let names = ['Robert' , 'Tiffany' , 'Sarivia' , 'Tequilia']
// names.forEach(name => {
    // alert(name + ' is the best')
// })