import React from 'react'
import ReactDOM from 'react-dom'
import ClassComponent from './classComponent'
ReactDOM.render(
    <ClassComponent label="contador" initialValue={0} />
, document.getElementById('app'))