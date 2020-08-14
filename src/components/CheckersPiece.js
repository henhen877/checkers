import React from 'react';
import './CheckersPiece.css';

// TODO'S
// 1) Most likely need to move all the constant variables to the parent component Tile, and 
// 		render this CheckersPiece component based off the state `hasPiece` in the Tile component.

// 2) Also needed to added several more callbacks to handle moving the piece and setting the
// 		`hasPiece`state to false if the piece is moved to another grid.

export const CheckersPiece = ({ index, gridSize, swapColor, changeShape, isFocused /*setHasPiece*/ }) => {
	const redPiece = 'redPiece'
	const blackPiece = 'blackPiece'
	const focused = isFocused ? 'focused' : ''
	const changedShape = changeShape ? 'squarePiece' : 'roundPiece'
	const swappedColorTop = !swapColor ? redPiece : blackPiece
	const swappedColorBot = swapColor ? redPiece : blackPiece
	// const hasPiece = true
	// const noPiece = false

	if (index <= 1) {
		// setHasPiece(hasPiece)
		return (
			<div 
				className={`checkerPiece ${ focused } ${ changedShape } ${ swappedColorTop }`}
			></div>
		)
	} else if (index >= gridSize - 2) {
		// setHasPiece(hasPiece)
		return (
			<div 
				className={`checkerPiece ${ focused } ${ changedShape } ${ swappedColorBot }`}
			></div>
		)
	} else {
		// setHasPiece(noPiece)
		return null
	}
}
