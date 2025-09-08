
function createBoard() {
  const tiles = []
  for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 10; y++) {
      const div = document.createElement('div')
      div.style.backgroundColor = 'lightblue'
      div.style.width = 'auto'
      div.style.height = 'auto'
      div.style.border = '1px solid black'
      
      const board = document.getElementById('board')

      const tile = {
        x,
        y,
        isEmpty: true,
        isCircle: false,
        isCross: false
      }
      tiles.push(tile)

      
      div.addEventListener('click', () => {
        this.playGame(tile) 
        console.log('clicked', tile)
      })
      
      board.appendChild(div)
    }
  }
}

function playGame(tile) {

  const turn = [1,2]

  let temp = [turn[0]]
  turn[0] = turn[1]
  turn[1] = temp

  if (turn[0] === 1) {
    tile.isCross = true
  } else {
    tile.isCircle = true
  }
  tile.isEmpty = false
  console.log(tile)

  }


createBoard()