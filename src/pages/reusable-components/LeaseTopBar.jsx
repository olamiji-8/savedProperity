import React from 'react'

const LeaseTopBar = ({img, text}) => {
  return (
    <div className='lease-top-bar-all'>
      <div className='lease-top-bar'>
        <h2 className='lease-top-bar-h2'>{text}</h2>
        <img className='lease-top-bar-img' src={img} alt="top-icon" />
      </div>
    </div>
  )
}

export default LeaseTopBar