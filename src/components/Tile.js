import React, { Component } from 'react';
import { CheckersPiece } from './CheckersPiece';
import './Tile.css';

class Tile extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isFocused: false
		}

		this.handleActiveTileClick = this.handleActiveTileClick.bind(this)
		this.handleUnActive = this.handleUnActive.bind(this)
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

	render() {
		const { className, index, gridSize, swapColor, changeShape, ind } = this.props;
		if (ind === gridSize) {
			return (
				<div className="clearSide"></div>
			)
		}
		return (
			<div 
				className={`tile ${className}`}
				onClick={this.handleActiveTileClick}
				onBlur={this.handleUnActive}
			>
				<CheckersPiece 
					index={index}
					isFocused={this.state.isFocused}
					gridSize={gridSize}
					swapColor={swapColor}
					changeShape={changeShape}
				/>
			</div>
		)
	}
}

export default Tile;
