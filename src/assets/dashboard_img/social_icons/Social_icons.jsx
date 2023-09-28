import React from 'react'
import whatsapp from '../../dashboard_img/social_icons/whatsapp-icon-seeklogo.com 1.png'
import facebook from'../../dashboard_img/social_icons/Vector.png'
import instagram from'../../dashboard_img/social_icons/instagram.png'
import twitter from '../../dashboard_img/social_icons/twitter.png'

const Social_icons = () => {
  return (
    <div>
        <img src={whatsapp} alt='' />
        <img src={facebook} alt='' />
        <img src={instagram} alt='' />
        <img src={twitter} alt='' />
    </div>
  )
}

export default Social_icons