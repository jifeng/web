import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Table from '../components/Table'
import Img from '../components/Img'
import counter from '../reducers'

const store = createStore(counter)

var rootEl = document.getElementById('root')
var imgEl = document.getElementById('img')

function render () {
	ReactDOM.render(
	  <Table
	    value = {store.getState()}
	    store = {store}
	  />,
	  rootEl  
	)

	ReactDOM.render(
	  < Img 
      value = {store.getState()}
	  />,
	  imgEl  
	)
}

render()
store.subscribe(render)

