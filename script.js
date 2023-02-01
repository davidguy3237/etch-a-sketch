const gridContainer = document.querySelector('.grid-container')
let gridToggleMemory = false;
let rainbowToggleMemory = false;
gridCreator(16);

// Slider value updater
const slider = document.querySelector('.slider');
const sliderValueDisplay = document.querySelector('.slider-value-display')
sliderValueDisplay.innerHTML = slider.value + ' x ' + slider.value;
slider.oninput = function() {
  sliderValueDisplay.innerHTML = this.value + ' x ' + this.value;
  clearGrid();
  gridCreator(this.value);
}

// Clear grid
function clearGrid() {
  gridContainer.innerHTML = '';
}

// Create grid
function gridCreator(gridSize) {
  gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  
  for (let i = 0; i < gridSize * gridSize; i++) {
    const gridSquare = document.createElement('div');
    gridSquare.classList.add('grid-square');
    if (gridToggleMemory) {
      gridSquare.classList.add('grid-lines');
    }
    gridContainer.appendChild(gridSquare);
  }
  
  // Draw on grid
  const allSquares = document.querySelectorAll('.grid-square');
  allSquares.forEach(square => {
    square.addEventListener('mouseover', changeColor);
  })
}

// Change color function for drawing on grid
function changeColor(e) {
  if (rainbowToggleMemory) {
    let randomRed = Math.floor(Math.random() * 256)
    let randomGreen = Math.floor(Math.random() * 256)
    let randomBlue = Math.floor(Math.random() * 256)
    e.target.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
  } else {
      const colorPicker = document.querySelector('#color-picker');
      e.target.style.backgroundColor = `${colorPicker.value}`;
    }
}

// Clear drawings button
const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
  clearButton.classList.toggle('active-button');
  setTimeout(function() {clearButton.classList.toggle('active-button')}, 150);
  const allSquares = document.querySelectorAll('.grid-square');
  allSquares.forEach(square => {
    square.style.backgroundColor = '';
  })
})

// Reset everything button
const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', () => {
  window.location.reload();
})

// Toggle grid lines 
const gridToggleButton = document.querySelector('.grid-toggle');
gridToggleButton.addEventListener('click', () => {
  gridToggleButton.classList.toggle('active-button');
  const allSquares = document.querySelectorAll('.grid-square');
  gridToggleMemory = gridToggleMemory === false ? true : false;
  allSquares.forEach(square => {
    square.classList.toggle('grid-lines');
  })
})

// RAINBOW toggle
const rainbowButton = document.querySelector('.rainbow');
rainbowButton.addEventListener('click', () => {
  rainbowButton.classList.toggle('active-button');
  rainbowToggleMemory = rainbowToggleMemory === false ? true : false;
})