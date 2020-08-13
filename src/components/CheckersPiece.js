import React from 'react';
import './CheckersPiece.css';

export const CheckersPiece = ({ index, gridSize }) => {
		console.log('rrrr', index)
		console.log('rrrrr2', gridSize)
	if (index <= 1) {
		return (
			<div className="checkerPiece redPiece"></div>
		)
	} else if (index >= gridSize - 2) {
		console.log('iiiii', index)
		console.log('iiiii2', gridSize)
		return (
			<div className="checkerPiece blackPiece"></div>
		)
	} else {
		return null
	}
}
