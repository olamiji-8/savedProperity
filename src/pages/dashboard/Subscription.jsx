import React from 'react'
import { subscriptionData } from '../../data/Subscription/data';
import SubscribeItems from './SubscribeItems';
import BackButton from '../reusable-components/BackButton';

const Subscription = () => {
  return (
  <div>
          <section className='subscribe'>
           <div className="subscribe-back"><BackButton/></div>
           <div>
          <h2 className='service-provider-h2  subscribe-top-h2'>Choose a Subscription Plan</h2>
          </div>
          <div className='subscribe-all flex-all'>
            {subscriptionData.map((subscribe,index)=>{
               return(
                  <SubscribeItems key={subscribe.id} {...subscribe} index={index} />
               )
            })}
     
         <button className='service-provider-input service-provider-btn subscribe-btn' type='submit'>Choose Plan</button>
          </div>
       </section>
  </div>
  )
}

export default Subscription