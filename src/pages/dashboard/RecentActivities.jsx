import React from 'react';
import '../../styles/ui/dashboard/recent-activities.scss'
import { MdOutlineNavigateBefore } from 'react-icons/md';
import { RiDeleteBinLine } from 'react-icons/ri'

const RecentActivities = () => {
    const RecentActivitiesItems = [
        {
            id: 1,
            title: "You searched for",
            linktext: "Agege, Lagos",
            linkUrl: "#",
            time: "10 mins ago",
        },
        {
            id: 2,
            title: "You scheduled a tour for",
            linktext: "Private 4 Bedroom Apartment Semi Duplex",
            linkUrl: "#",
            time: "2 hrs ago",
        },
        {
            id: 3,
            title: "You searched for Agege, Lagos",
            linktext: "",
            linkUrl: "#",
            time: "5 hrs ago",
        },
        {
            id: 4,
            title: "You searched for Agege, Lagos",
            linktext: "",
            linkUrl: "#",
            time: "Yesterday at 05:00pm",
        },
        {
            id: 5,
            title: "You searched for Agege, Lagos",
            linktext: "",
            linkUrl: "#",
            time: "10th May, 2020 at 2:00pm",
        },

    ]

    return (
        <div className='recent-activities-container'>

            {/* Back Icon */}
            <div className='recent-activities-container-previcon '>
                <span><a href="">
                    <MdOutlineNavigateBefore />
                </a>
                </span>
                Back
            </div>

            {/* title: Recent Activities */}
            <div className='recent-activities-cont-top'>
                <span className='recent-activities-title-holder'>
                    Recent Activities
                </span>
                <a href="#">Clear All</a>
            </div>

            {
                RecentActivitiesItems.map((item) => (
                    <div className='recent-activities-container_content' key={item.id}>
                        <div className='recent-activities-container_items'>
                            <div className='recent-activities-container_items__icon-left'></div>
                            <div className='recent-activities-container-items-content'>
                                <div className='recent-activities-container-items__title'>
                                    <span className='title__span' >{item.title} <a href={item.linkUrl}>{item.linktext}</a> </span>
                                    <p className='title__p'>{item.time}</p>
                                </div>
                                <div className='view-container'>
                                    <div className='recent-activities-container_items__icon' style={{ backgroundColor: item.iconBgColor }}><RiDeleteBinLine /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div >
    );
}

export default RecentActivities;
