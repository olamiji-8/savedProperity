import React from 'react'
import '../../../styles/ui/dashboard/dashrightsidebartextwrap.scss'

function DashRightSidebarTextWrap(props) {
    return (
        <>
            {
                props.Items && props.Items.map((item, index) => (
                    <div key={index} className='dash-right-sidbar-textwrap'>
                        <div>{item.text} <a href={item.url}>{item.linkText}</a ></div>
                        <div>{item.date}</div>
                    </div>
                ))
            }
        </>
    )
}

export default DashRightSidebarTextWrap
