import React from 'react';
import '../../styles/ui/dashboard/notification.scss'
import { TbReceipt } from 'react-icons/tb';
import { BiShapeCircle } from 'react-icons/bi';
import { FaSearch } from 'react-icons/fa';
import { MdOutlineNavigateBefore } from 'react-icons/md';

const Notification = () => {


    const NotificationItems = [
        {
            id: 1,
            title: "You Receipt was sent to your mail",
            time: "10 mins ago",
            icon: <TbReceipt />,
            iconBgColor: "rgba(255, 187, 0, 0.922)",
            url: "#",
            view: "View"
        },
        {
            id: 2,
            title: "You have successfully earned from a refferal on Renager",
            time: "2 hrs ago",
            icon: <BiShapeCircle />,
            iconBgColor: "rgba(0, 187, 0, 0.90)",
            url: "#",
            view: "View"
        },
        {
            id: 3,
            title: "You searched for Agege Lagos",
            time: "5 hrs ago",
            icon: <FaSearch />,
            iconBgColor: "#EBF0FF",
            url: "#",
            view: "View"
        },
        {
            id: 4,
            title: "You searched for Agege Lagos",
            time: "Yesterday at 05:00pm hrs ago",
            icon: <FaSearch />,
            iconBgColor: "#EBF0FF",
            url: "#",
            view: "View"
        },
        {
            id: 5,
            title: "You searched for Agege Lagos",
            time: "10th May, 2020, at 2:00",
            icon: <FaSearch />,
            iconBgColor: "#EBF0FF",
            url: "#",
            view: "View"
        },

    ]


    return (
        <div className='notification-container'>

            {/* Back Icon */}
            <div className='notification-container-previcon '>
                <span><a href="">
                    <MdOutlineNavigateBefore />
                </a>
                </span>
                Back
            </div>

            {/* title: Notification */}
            <div className='notification-cont-top'>
                <span className='notification-title-holder'>
                    Notification
                </span>
                <a href="#">Mark All as Read</a>
            </div>

            {
                NotificationItems.map((item) => (
                    <div className='notification-container_content' key={item.id}>
                        <div className='notification-container_items'>
                            <div className='notification-container_items__icon' style={{ backgroundColor: item.iconBgColor }}><TbReceipt /></div>
                            <div className='notification-container-items-content'>
                                <div className='notification-container-items__title'>
                                    <span className='title__span' >{item.title}</span>
                                    <p className='title__p'>{item.time}</p>
                                </div>
                                <div className='view-container'>
                                    <a href={item.url}>{item.view}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }





        </div >
    );
}

export default Notification;
