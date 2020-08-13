import React from 'react';
import { CheckersPiece } from './CheckersPiece';
import './Tile.css';

export const Tile = ({ className, index, gridSize }) => (
	<div className={`tile ${className}`}>
		<CheckersPiece 
			index={index}
			gridSize={gridSize}
		/>
	</div>
)