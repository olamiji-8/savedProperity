import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import '../../../styles/ui/dashboard/dashboardrightcontainer.scss'
import DashRightSidebarTextWrap from './DashRightSidebarTextWrap'

function DashboardRigtContainer(props) {
    return (
        <div className='dash-right-card'>
            <div className='dash-right-card__title'>
                <span>{props.title}</span>
                <span><a href={props.url}>{props.view} &nbsp;<IoIosArrowForward /></a></span>
            </div>
            <DashRightSidebarTextWrap Items={props.RightSidbarItems} />
        </div>
    )
}

export default DashboardRigtContainer
