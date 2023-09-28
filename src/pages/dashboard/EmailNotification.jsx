import React from 'react';
import '../../styles/ui/dashboard/emailnotification.scss'
import { MdOutlineNavigateBefore } from 'react-icons/md';
import { RiDeleteBinLine } from 'react-icons/ri';
import Button from '../../components/ui/Button';

const EmailNotification = () => {
    const EmailNotificationItems = [
        {
            id: 1,
            title: "",
            linktext: "Your Receipt was sent to your mail",
            linkUrl: "#",
            time: "10 mins ago",
            date: "12/26/21"
        },
        {
            id: 2,
            title: "Your Receipt for Transaction made on 12/25/21 has been sent to your",
            linktext: "mail",
            linkUrl: "#",
            time: "",
            date: ""
        },

    ]

    return (
        <div className='email-notification-container'>

            {/* Back Icon */}

            {
                EmailNotificationItems.map((item) => (
                    <div className='email-notification-container_content' key={item.id}>
                        <div className='email-notification-container_items'>
                            <div className='email-notification-container-items-content'>
                                <div className='email-notification-container-items__title'>
                                    <span className='title__span' >{item.title} <a href={item.linkUrl}>{item.linktext}</a> </span>
                                    <p className='title__p'>{item.time}</p>
                                </div>
                                <div className='date-container'>
                                    <div className='email-notification-container_items__icon'>{item.date}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
            <div className='email-notification-clos__button'>
                <Button text="Close" link="#" styles={{ backgroundColor: "#4B5FFA" }} />
            </div>

        </div >
    );

}

export default EmailNotification;
