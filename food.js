import {onSnake, expandSnake} from './snake.js'
import {randomGridPosition} from './grid.js'

let food = getRandomFoodPosition() /*css grid fillon ne 1
ketu e kemi nga 1-21 dhe 0 eshte jashte grid*/

const EXPANSION_RATE = 3

export function update() {
    if (onSnake(food)){
        expandSnake(EXPANSION_RATE)
        food = getRandomFoodPosition()
    }
 }
 
 export function draw(gameBoard) {
     const foodElement = document.createElement('div')
     foodElement.style.gridRowStart = food.y
     foodElement.style.gridColumnStart = food.x
     foodElement.classList.add('food')
     gameBoard.appendChild(foodElement)
 }

 function getRandomFoodPosition(){
     let newFoodPosition
     while (newFoodPosition == null || onSnake(newFoodPosition)){
        newFoodPosition = randomGridPosition()
     }
     return newFoodPosition
 }