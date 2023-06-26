import React, {useState} from 'react';
import axios from 'axios';

const URL = 'http://localhost:9000/api/result';


export default function AppFunctional(props) {
  
  const [state, setState] = useState({
    x: 2,
    y: 2,
    steps: 0,
    grid: ['','','','','B','','','',''],
    message: '',
    className: 'square',
    email: ''
  })

    const moveLeft = (val) => {
      if(state.grid[1] === 'B') {
        setState({
          ...state, 
          grid: ['B','','','','','','','',''],
          message: '',
          x: 1,
          y: 1,
          steps: state.steps + 1
        })
      } else if(state.grid[2] === 'B') {
        setState({
          ...state, 
          grid: ['','B','','','','','','',''],
          message: '',
          x: 2,
          y: 1,
          steps: state.steps + 1
      })
    } else if(state.grid[4] === 'B') {
      setState({
        ...state, 
        grid: ['','','','B','','','','',''],
        message: '',
        x: 1,
        y: 2,
        steps: state.steps + 1
    }) 
  } else if(state.grid[5] === 'B') {
    setState({
      ...state, 
      grid: ['','','','','B','','','',''],
      message: '',
      x: 2,
      y: 2,
      steps: state.steps + 1
  }) 
  } else if(state.grid[7] === 'B') {
    setState({
      ...state, 
      grid: ['','','','','','','B','',''],
      message: '',
      x: 1,
      y: 3,
      steps: state.steps + 1
  }) 
  } else if(state.grid[8] === 'B') {
    setState({
      ...state, 
      grid: ['','','','','','','','B',''],
      message: '',
      x: 2,
      y: 3,
      steps: state.steps + 1
  }) 
  } else if (
    state.grid[0] === 'B' ||
    state.grid[3] === 'B' ||
    state.grid[6] === 'B' 
  ) {
    setState({
      ...state, message: "You can't go left"
    })
  }
}

const moveRight = (val) => {
  if(state.grid[0]==='B') {
    setState({
      ...state,
      grid: ['','B','','','','','','',''],
      message: '',
      x: 2,
      y: 1,
      steps: state.steps + 1
    })
  } else if(state.grid[1]==='B'){
    setState({
      ...state,
      grid: ['','','B','','','','','',''],
      message: '',
      x: 3,
      y: 1,
      steps: state.steps + 1
    })
  } else if(state.grid[3]==='B'){
    setState({
      ...state,
      grid: ['','','','','B','','','',''],
      message: '',
      x: 2,
      y: 2,
      steps: state.steps + 1
    })
  } else if(state.grid[4]==='B'){
    setState({
      ...state,
      grid: ['','','','','','B','','',''],
      message: '',
      x: 3,
      y: 2,
      steps: state.steps + 1
    })
  } else if(state.grid[6]==='B'){
    setState({
      ...state,
      grid: ['','','','','','','','B',''],
      message: '',
      x: 2,
      y: 3,
      steps: state.steps + 1
    })
  } else if(state.grid[7]==='B'){
    setState({
      ...state,
      grid: ['','','','','','','','','B'],
      message: '',
      x: 3,
      y: 3,
      steps: state.steps + 1
    })
  } else if (
    state.grid[2] === 'B' ||
    state.grid[5] === 'B' ||
    state.grid[8] === 'B' 
  ) {
    setState({
      ...state,
      message: "You can't go right"
    })
  }
}

const moveUp = (val) => {
  if(state.grid[3]==='B') {
    setState({
      ...state,
      grid: ['B','','','','','','','',''],
      message: '',
      x: 1,
      y: 1,
      steps: state.steps + 1
    })
  } else if(state.grid[4] === 'B') {
    setState({
      ...state,
      grid: ['','B','','','','','','',''],
      message: '',
      x: 2,
      y: 1,
      steps: state.steps + 1
    })
  } else if(state.grid[5] === 'B') {
    setState({
      ...state,
      grid: ['','','B','','','','','',''],
      message: '',
      x: 3,
      y: 1,
      steps: state.steps + 1
    })
  } else if(state.grid[6] === 'B') {
    setState({
      ...state,
      grid: ['','','','B','','','','',''],
      message: '',
      x: 1,
      y: 2,
      steps: state.steps + 1
    })
  } else if(state.grid[7] === 'B') {
    setState({
      ...state,
      grid: ['','','','','B','','','',''],
      message: '',
      x: 2,
      y: 2,
      steps: state.steps + 1
    })
  } else if(state.grid[8] === 'B') {
    setState({
      ...state,
      grid: ['','','','','','B','','',''],
      message: '',
      x: 3,
      y: 2,
      steps: state.steps + 1
    })
  } else if(
    state.grid[0] === 'B' ||
    state.grid[1] === 'B' ||
    state.grid[2] === 'B' 
  ) {
    setState({
      ...state,
      message: "You can't go up"
    })
  }
}

const moveDown = (val) => {
  if(state.grid[0] === 'B') {
    setState({
      ...state,
      grid: ['','','','B','','','','',''],
      message: '',
      x: 1,
      y: 2,
      steps: state.steps + 1
    })
  } else if(state.grid[1] === 'B') {
    setState({
      ...state,
      grid: ['','','','','B','','','',''],
      message: '',
      x: 2,
      y: 2,
      steps: state.steps + 1
    })
  } else if(state.grid[2] === 'B') {
    setState({
      ...state,
      grid: ['','','','','','B','','',''],
      message: '',
      x: 3,
      y: 2,
      steps: state.steps + 1
    })
  } else if(state.grid[3] === 'B') {
    setState({
      ...state,
      grid: ['','','','','','','B','',''],
      message: '',
      x: 1,
      y: 3,
      steps: state.steps + 1
    })
  } else if(state.grid[4] === 'B') {
    setState({
      ...state,
      grid: ['','','','','','','','B',''],
      message: '',
      x: 2,
      y: 3,
      steps: state.steps + 1
    })
  } else if(state.grid[5] === 'B') {
    setState({
      ...state,
      grid: ['','','','','','','','','B'],
      message: '',
      x: 3,
      y: 3,
      steps: state.steps + 1
    })
  } else if(
    state.grid[6] === 'B' ||
    state.grid[7] === 'B' ||
    state.grid[8] === 'B' 
    ) {
      setState({
        ...state,
        message: "You can't go down"
      })
    }
}

  const resetButton = () => {
    setState({
      ...state,
      grid: ['','','','','B','','','',''],
      message: '',
      x: 2,
      y: 2,
      steps: 0,
      email: '',
    })
  }

  const handleChange = evt => {
    setState({
      ...state,
      email: evt.target.value
    })
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    axios.post(URL, {
      x: state.x,
      y: state.y,
      steps: state.steps,
      email: state.email,
    })
    .then(res => {
      setState({
        ...state,
        message: res.data.message,
        email: '',
      })
    })
    .catch(err => {
      setState({
        ...state,
        message: err.response.data.message
      })
    })
  }

  const movement = () => {
    if(state.steps === 1) {
      return(`You moved 1 time`) 
    } else {
      return (`You moved ${state.steps} times`)
    }
  }

  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">{`Coordinates (${state.x}, ${state.y})`}</h3>
        <h3 id="steps">{movement(state.steps)}</h3>
      </div>
      <div id="grid">
        {state.grid.map((active, idx) => {
          return (
            <div key={idx} className={`${active ? 'active square' : 'square'}`}>{active}</div>
          )
        })}
      </div>
      <div className="info">
        <h3 id="message">{state.message}</h3>
      </div>
      <div id="keypad">
        {state.grid.map((val, idx) => {
          return (<button id='left' key={idx} onClick={() => moveLeft(val)}>LEFT</button>)
        })}
        {state.grid.map((val, idx) => {
          return (<button id='up' key={idx} onClick={() => moveUp(val)}>UP</button>)
        })}
        {state.grid.map((val, idx) => {
          return (<button id='right' key={idx} onClick={() => moveRight(val)}>RIGHT</button>)
        })}
        {state.grid.map((val, idx) => {
          return (<button id='down' key={idx} onClick={() => moveDown(val)}>DOWN</button>)
        })}
        {state.grid.map((val, idx) => {
          return (<button id='reset' key={idx} onClick={() => resetButton(val)}>reset</button>)
        })}
      </div>
      <form onSubmit={handleSubmit}>
        <input 
        id="email" 
        type="email" 
        placeholder="type email" 
        value={state.email} 
        onChange={handleChange}>
        </input>
        <input id="submit" type="submit"></input>
      </form>
    </div>
  )
}
