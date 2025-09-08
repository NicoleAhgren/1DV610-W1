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
    
    div.addEventListener('click', () => {
      console.log('clicked', tile)
    })
    
    board.appendChild(div)
  }
}