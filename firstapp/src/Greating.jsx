import React from 'react'

export default function Greating(props) {
  return (
    <div>
      <h3> Hello, {props.fn}! , your age is {props.age}?</h3>
    </div>
  )
}
