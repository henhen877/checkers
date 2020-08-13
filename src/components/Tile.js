import React, { Component } from 'react';
import { CheckersPiece } from './CheckersPiece';
import './Tile.css';

class Tile extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { className, index, gridSize, swapColor, changeShape, ind } = this.props;
		if (ind === gridSize) {
			return (
				<div className="clearSide"></div>
			)
		}
		return (
			<div className={`tile ${className}`} style={{color: "blue"}}>
				<CheckersPiece 
					index={index}
					gridSize={gridSize}
					swapColor={swapColor}
					changeShape={changeShape}
				/>
			</div>
		)
	}
}

export default Tile;
