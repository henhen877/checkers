import React, { Component } from 'react';
import logo from './logo.svg';
import Tile from './components/Tile';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gridSize: 8, //default value is 8x8 grid;
      grid: [],
      gridContainerSize: '180px',
      swapColor: false,
      changeShape: false
    }

    this.gridSizeInput = React.createRef();
    this.changeSize = this.changeSize.bind(this);
    this.handleSwapColor = this.handleSwapColor.bind(this)
    this.handleChangeShape = this.handleChangeShape.bind(this)
    this.handleRadioChange = this.handleRadioChange.bind(this)
  }

  componentDidMount() {  
    this.initGrid();
  }

  initGrid() {
    var arr = [];
    var column = [];
    var reverseColor = false;
    const blackClass = 'black';
    const whiteClass = 'white';
    const tileSize = 20; //Size and width defined in Tile.css stylesheet. Can make dynamic also but short on time

    for (var x = 0; x < this.state.gridSize; x++) {
      for (var y = 0; y < this.state.gridSize + 1; y++) {
        if (y % 2 === 0) {
          column.push(reverseColor === true ? blackClass : whiteClass); 
        } else {
          column.push(reverseColor === false ? blackClass : whiteClass);
        }
      }
      reverseColor = !reverseColor;
      arr.push(column);
      column = [];
    }

    this.setState({
      grid: arr,
      gridContainerSize: ((this.state.gridSize * 20) + 20) + 'px'
    })
  }

  changeSize(e) {
    e.preventDefault();
    console.log('ons isze', this.gridSizeInput.current.value)

    this.setState({
      gridSize: Number(this.gridSizeInput.current.value)
    }, () => this.initGrid())
  }

  handleSwapColor(e) {
    // e.preventDefault();
    this.setState({
      swapColor: !this.state.swapColor
    })

  }

  handleChangeShape(e) {
    // e.preventDefault();
    this.setState({
      changeShape: !this.state.changeShape
    })

  }

  handleRadioChange(e) {
    return;
  }

  render() {
    const tileSize = 20; //tile width / height
    const gridSize = this.state.grid * 25;
    return (
      <div className="App">
        <div className="changeSizeForm">
          <label for="sizeInput">Change Grid Size</label>
          <br/>
          <input name="sizeInput" type="text" ref={this.gridSizeInput}/>
          <button
            type="button"
            onClick={this.changeSize}
          >
            Change Size
          </button>
        </div>
        <header className="App-header">
          <div className="gridContainer">
            {
              this.state.grid.length > 0 && this.state.grid.map((el, index) => (
                el.map((e, i) => (
                    <Tile
                      key={`tile${i}`}
                      ind={i}
                      index={index}
                      gridSize={this.state.gridSize}
                      swapColor={this.state.swapColor}
                      changeShape={this.state.changeShape}
                      className={e}
                    />
                  )
                )
              ))
            }
          </div>
        </header>
        <div className="pieceController">
          <p>Customize Chess Pieces:</p>
          <input 
            type="radio" 
            id="swapColor"
            name="swapColor"
            value={this.state.swapColor}
            checked={this.state.swapColor}
            onClick={this.handleSwapColor}
            onChange={this.handleRadioChange} 
          />
          <label for="swapColor">Swap Colors</label><br/>
          <input 
            type="radio"
            id="changeSquare"
            name="gender"
            value={this.state.changeShape}
            checked={this.state.changeShape}
            onClick={this.handleChangeShape}
            onChange={this.handleRadioChange}
           />
          <label for="changeSquare">Change to Square Shape</label><br/>
        </div>
      </div>
     )
  }
}

export default App;
