import React, { Component } from 'react';
import logo from './logo.svg';
import { Tile } from './components/Tile';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gridSize: 8, //default value is 8x8 grid;
      grid: []
    }
  }

  componentDidMount() {
    var arr = [];
    var column = [];
    const blackClass = 'black';
    const whiteClass = 'white';

    for (var x = 0; x < this.state.gridSize; x++) {
      for (var y = 0; y < this.state.gridSize; y++) {
        if (y % 2 === 0) {
          column.push(blackClass); 
        } else {
          column.push(whiteClass);
        }
      }
      arr.push(column);
      column = [];
    }

    // console.log('ARRR', arr);
    this.setState({
      grid: arr
    }, () => console.log('state', this.state.grid))
  }

  render() {
    const tileSize = 20; //tile width / height
    const gridSize = this.state.grid * 25;
    return (
      <div className="App">
        <header className="App-header">
          <div className="gridContainer" style={{width: '180px'}}>
            {
              this.state.grid.length > 0 && this.state.grid.map((el, index) => {
                  return el.map((e, i) => {
                    console.log('2222')
                    if (i < this.state.grid.length) {
                      return (
                        <Tile
                          key={`tile${i}`} 
                          className={e}
                        />
                       )
                    }
                  })
              })
            }
          </div>
        </header>
      </div>
     )
  }
}

export default App;
