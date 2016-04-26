//引入本初包
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

//React组件
import Counter from './components/Counter'

import counter from './reducers'

const store = createStore(counter)

const rootEl = document.getElementById('root')

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
      onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    />,
    rootEl  
  )
}

render()
store.subscribe(render)

