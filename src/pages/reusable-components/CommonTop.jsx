import React from 'react'
import greaterThan from "../../assets/images/GreaterThan.png"
import BackButton from './BackButton'

const CommonTop = ({name}) => {
  return (
    <div>
      <BackButton/>
         <div className='common-top-bottom'>
            <p className='fixed-mode'>Mode <img src={greaterThan} className='less-icon' alt="greater-than" /><span className="common-top-name"> {name}</span></p>
         </div>
    </div>
  )
}

export default CommonTop