import React from 'react'
import ReactDOM from 'react-dom'
import {App} from './App/App'

const rocket2 = {
    height: '400px'
}
const amount1 = {
    height: '230px'
}

function onPlayerStop() {
    alert('stopeed');
}

ReactDOM.render(<App/>, document.getElementById('a'))