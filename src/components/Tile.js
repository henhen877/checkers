import React from 'react';
import { CheckersPiece } from './CheckersPiece';
import './Tile.css';

export const Tile = ({ className, index, gridSize, swapColor, changeShape }) => (
	<div className={`tile ${className}`}>
		<CheckersPiece 
			index={index}
			gridSize={gridSize}
			swapColor={swapColor}
			changeShape={changeShape}
		/>
	</div>
)