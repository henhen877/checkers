import React from 'react';
import './CheckersPiece.css';

export const CheckersPiece = ({ index, gridSize, swapColor, changeShape, isFocused }) => {
	const redPiece = 'redPiece'
	const blackPiece = 'blackPiece'

	if (index <= 1) {
		return (
			<div 
				className={`checkerPiece ${isFocused ? 'focused' : ''} ${changeShape ? 'squarePiece' : 'roundPiece'} ${!swapColor ? redPiece : blackPiece }`}
			></div>
		)
	} else if (index >= gridSize - 2) {
		return (
			<div 
				className={`checkerPiece ${isFocused ? 'focused' : ''} ${changeShape ? 'squarePiece' : 'roundPiece'} ${swapColor ? redPiece : blackPiece}`}
			></div>
		)
	} else {
		return null
	}
}
