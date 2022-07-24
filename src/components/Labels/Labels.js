import React from 'react'
import './Labels.css'
const Labels = ({ label }) => {
  return (
    <div key={label.id} className='label'>
      <h1>{label.title}</h1>
    </div>
  )
}

export default Labels
