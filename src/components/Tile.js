import React, { Component } from 'react';
import { CheckersPiece } from './CheckersPiece';
import './Tile.css';

// TODO'S
// 1) Need to create a method that would check the tiles in front of the currently focused grid.

// 2) Move the logic in CheckersPiece component to here and use the state `hasPiece`, to control
// 		rendering the CheckersPiece component

class Tile extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isFocused: false,
			// hasPiece: false /* Use this to control whether a <CheckersPiece/> components get returned in render() */
		}

		this.handleActiveTileClick = this.handleActiveTileClick.bind(this)
		this.handleUnActive = this.handleUnActive.bind(this)
		// this.setHasPiece = this.setHasPiece.bind(this)
	}

	handleActiveTileClick() {
		this.setState({
			isFocused: true
		})
	}

	handleUnActive() {
		this.setState({
			isFocused: false
		})
	}

	// setHasPiece(hasPiece) {
	// 	console.log('HAS PIECE CB', hasPiece)
	// 	this.setState({
	// 		hasPiece
	// 	}, () => console.log('setState', this.state.hasPiece))
	// }

	render() {
		const { className, index, gridSize, swapColor, changeShape } = this.props;
		return (
			<div 
				className={`tile ${className}`}
				onClick={this.handleActiveTileClick}
				onBlur={this.handleUnActive}
				tabIndex={-1}
			>
				<CheckersPiece 
					index={index}
					isFocused={this.state.isFocused}
					gridSize={gridSize}
					swapColor={swapColor}
					changeShape={changeShape}
					// setHasPiece={this.setHasPiece}
				/>
			</div>
		)
	}
}

export default Tile;
