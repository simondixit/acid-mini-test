import React from 'react'
import { useState } from 'react/cjs/react.development'

function Checkbox(props) {
  const [checked, setChecked] = useState(false)

  return (
    <li className="item-list">
      <label>
        <input type="checkbox" id="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
        <span>{props.item}</span>
      </label>
      <button id="remove-btn" onClick={props.handleClick}>x</button>
    </li>
  )
}

export default Checkbox