import React, {useState} from 'react'
import axios from 'axios'

const URL = 'http://localhost:9000/api/result';

const initialMessage = ''
const initialEmail = ''
const initialSteps = 0
const initialIndex = 4

export default class AppClass extends React.Component {
  
  state = {
    x: 2,
    y: 2,
    steps: 0,
    grid: ['','','','','B','','','',''],
    message: '',
    className: 'square',
    email: ''
  }

  moveLeft = (val) => {
    if(this.state.grid[1] === 'B') {
      this.setState({
        ...this.state, 
        grid: ['B','','','','','','','',''],
        message: '',
        x: 1,
        y: 1,
        steps: this.state.steps + 1
      })
    } else if(this.state.grid[2] === 'B') {
      this.setState({
        ...this.state, 
        grid: ['','B','','','','','','',''],
        message: '',
        x: 2,
        y: 1,
        steps: this.state.steps + 1
    })
  } else if(this.state.grid[4] === 'B') {
    this.setState({
      ...this.state, 
      grid: ['','','','B','','','','',''],
      message: '',
      x: 1,
      y: 2,
      steps: this.state.steps + 1
  }) 
} else if(this.state.grid[5] === 'B') {
  this.setState({
    ...this.state, 
    grid: ['','','','','B','','','',''],
    message: '',
    x: 2,
    y: 2,
    steps: this.state.steps + 1
}) 
} else if(this.state.grid[7] === 'B') {
  this.setState({
    ...this.state, 
    grid: ['','','','','','','B','',''],
    message: '',
    x: 1,
    y: 3,
    steps: this.state.steps + 1
}) 
} else if(this.state.grid[8] === 'B') {
  this.setState({
    ...this.state, 
    grid: ['','','','','','','','B',''],
    message: '',
    x: 2,
    y: 3,
    steps: this.state.steps + 1
}) 
} else if (
  this.state.grid[0] === 'B' ||
  this.state.grid[3] === 'B' ||
  this.state.grid[6] === 'B' 
) {
  this.setState({
    ...this.state, message: "You can't go left"
  })
}
}

moveRight = (val) => {
  if(this.state.grid[0] === 'B') {
    this.setState({
      ...this.state,
      grid: ['','B','','','','','','',''],
      message: '',
      x: 2,
      y: 1,
      steps: this.state.steps + 1
    })
  } else if(this.state.grid[1] === 'B'){
    this.setState({
      ...this.state,
      grid: ['','','B','','','','','',''],
      message: '',
      x: 3,
      y: 1,
      steps: this.state.steps + 1
    })
  } else if(this.state.grid[3]==='B'){
    this.setState({
      ...this.state,
      grid: ['','','','','B','','','',''],
      message: '',
      x: 2,
      y: 2,
      steps: this.state.steps + 1
    })
  } else if(this.state.grid[4] === 'B'){
    this.setState({
      ...this.state,
      grid: ['','','','','','B','','',''],
      message: '',
      x: 3,
      y: 2,
      steps: this.state.steps + 1
    })
  } else if(this.state.grid[6]==='B'){
    this.setState({
      ...this.state,
      grid: ['','','','','','','','B',''],
      message: '',
      x: 2,
      y: 3,
      steps: this.state.steps + 1
    })
  } else if(this.state.grid[7]==='B'){
    this.setState({
      ...this.state,
      grid: ['','','','','','','','','B'],
      message: '',
      x: 3,
      y: 3,
      steps: this.state.steps + 1
    })
  } else if (
    this.state.grid[2] === 'B' ||
    this.state.grid[5] === 'B' ||
    this.state.grid[8] === 'B' 
  ) {
    this.setState({
      ...this.state,
      message: "You can't go right"
    })
  }
}

moveUp = (val) => {
  if(this.state.grid[3]==='B') {
    this.setState({
      ...this.state,
      grid: ['B','','','','','','','',''],
      message: '',
      x: 1,
      y: 1,
      steps: this.state.steps + 1
    })
  } else if(this.state.grid[4] === 'B') {
    this.setState({
      ...this.state,
      grid: ['','B','','','','','','',''],
      message: '',
      x: 2,
      y: 1,
      steps: this.state.steps + 1
    })
  } else if(this.state.grid[5] === 'B') {
    this.setState({
      ...this.state,
      grid: ['','','B','','','','','',''],
      message: '',
      x: 3,
      y: 1,
      steps: this.state.steps + 1
    })
  } else if(this.state.grid[6] === 'B') {
    this.setState({
      ...this.state,
      grid: ['','','','B','','','','',''],
      message: '',
      x: 1,
      y: 2,
      steps: state.steps + 1
    })
  } else if(this.state.grid[7] === 'B') {
    this.setState({
      ...this.state,
      grid: ['','','','','B','','','',''],
      message: '',
      x: 2,
      y: 2,
      steps: this.state.steps + 1
    })
  } else if(this.state.grid[8] === 'B') {
    this.setState({
      ...this.state,
      grid: ['','','','','','B','','',''],
      message: '',
      x: 3,
      y: 2,
      steps: this.state.steps + 1
    })
  } else if(
    this.state.grid[0] === 'B' ||
    this.state.grid[1] === 'B' ||
    this.state.grid[2] === 'B' 
  ) {
    this.setState({
      ...this.state,
      message: "You can't go up"
    })
  }
}
moveDown = (val) => {
  if(this.state.grid[0] === 'B') {
    this.setState({
      ...this.state,
      grid: ['','','','B','','','','',''],
      message: '',
      x: 1,
      y: 2,
      steps: this.state.steps + 1
    })
  } else if(this.state.grid[1] === 'B') {
    this.setState({
      ...this.state,
      grid: ['','','','','B','','','',''],
      message: '',
      x: 2,
      y: 2,
      steps: this.state.steps + 1
    })
  } else if(this.state.grid[2] === 'B') {
    this.setState({
      ...this.state,
      grid: ['','','','','','B','','',''],
      message: '',
      x: 3,
      y: 2,
      steps: this.state.steps + 1
    })
  } else if(this.state.grid[3] === 'B') {
    this.setState({
      ...this.state,
      grid: ['','','','','','','B','',''],
      message: '',
      x: 1,
      y: 3,
      steps: this.state.steps + 1
    })
  } else if(this.state.grid[4] === 'B') {
    this.setState({
      ...this.state,
      grid: ['','','','','','','','B',''],
      message: '',
      x: 2,
      y: 3,
      steps: this.state.steps + 1
    })
  } else if(this.state.grid[5] === 'B') {
    this.setState({
      ...this.state,
      grid: ['','','','','','','','','B'],
      message: '',
      x: 3,
      y: 3,
      steps: this.state.steps + 1
    })
  } else if(
    this.state.grid[6] === 'B' ||
    this.state.grid[7] === 'B' ||
    this.state.grid[8] === 'B' 
    ) {
      this.setState({
        ...this.state,
        message: "You can't go down"
      })
    }
}

resetButton = () => {
  this.setState({
    ...this.state,
    grid: ['','','','','B','','','',''],
    message: '',
    x: 2,
    y: 2,
    steps: 0,
    email: '',
  })
}

handleChange = evt => {
  this.setState({
    ...this.state,
    email: evt.target.value
  })
}

handleSubmit = evt => {
  evt.preventDefault()
  axios.post(URL, {
    x: this.state.x,
    y: this.state.y,
    steps: this.state.steps,
    email: this.state.email,
  })
  .then(res => {
    this.setState({
      ...this.state,
      message: res.data.message,
      email: ''
    })
  })
  .catch(err => {
    this.setState({
      ...this.state,
      message: err.response.data.message
    })
  })
}

movement = () => {
  if(this.state.steps === 1) {
    return(`You moved 1 time`) 
  } else {
    return (`You moved ${this.state.steps} times`)
  }
}
  

  render() {
    const { className } = this.props
    return (
      <div id="wrapper" className={className}>
        <div className="info">
        <h3 id="coordinates">{`Coordinates (${this.state.x}, ${this.state.y})`}</h3>
        <h3 id="steps">{this.movement(this.state.steps)}</h3>
        </div>
        <div id="grid">
        {this.state.grid.map((active, idx) => {
          return (
            <div key={idx} className={`${active ? 'active square' : 'square'}`}>{active}</div>
          )
        })}
        </div>
        <div className="info">
        <h3 id="message">{this.state.message}</h3>
        </div>
        <div id="keypad">
        {this.state.grid.map((val, idx) => {
          return (<button id='left' key={idx} onClick={() => this.moveLeft(val)}>LEFT</button>)
        })}
        {this.state.grid.map((val, idx) => {
          return (<button id='up' key={idx} onClick={() => this.moveUp(val)}>UP</button>)
        })}
        {this.state.grid.map((val, idx) => {
          return (<button id='right' key={idx} onClick={() => this.moveRight(val)}>RIGHT</button>)
        })}
        {this.state.grid.map((val, idx) => {
          return (<button id='down' key={idx} onClick={() => this.moveDown(val)}>DOWN</button>)
        })}
        {this.state.grid.map((val, idx) => {
          return (<button id='reset' key={idx} onClick={() => this.resetButton(val)}>reset</button>)
        })}
        </div>
        <form onSubmit={this.handleSubmit}>
        <input 
        id="email" 
        type="email" 
        placeholder="type email" 
        value={this.state.email} 
        onChange={this.handleChange}>
        </input>
        <input id="submit" type="submit"></input>
        </form>
      </div>
    )
  }
}
