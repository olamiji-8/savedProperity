import React, {useState} from 'react'


const SubscribeItems = ({id, name, duration, paragraph, amount, index}) => {
     const [active, setActive]= useState(false)
  return (
    <div>
         <div className={`subscribe-each ${id-1 === index && active ? 'subscribe-active' : ''}`} onClick={()=>
                   setActive(!active)
                     } key={id}>
                  <h3>{name}</h3>
                  <div className="service-provider-img subscribe-img"></div>
                  <p className="subscribe-hide">{duration}</p>
                  <div className="subscribe-flex">
                     <p>{paragraph}</p>
                     <h2 className='subscribe-price'>{amount}</h2>
                  </div>
                  <a href="/">subscribe</a>
               </div>
    </div>
  )
}

export default SubscribeItems