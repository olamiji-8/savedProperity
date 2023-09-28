import "../../styles/ui/dashboard/dashboard.scss";
import TRT from "../../components/ui/dashboard/TRT";
import DashboardProperty from "../../components/ui/dashboard/DashboardProperty";
import React from "react";
import DashboardRigtContainer from "../../components/ui/dashboard/DashboardRightContainer";
import Banner from "../../components/ui/dashboard/Banner";

// import { RightSidbarItems } from '../../data/dashboarRightSidebarContent'

const MainDashboard = () => {
  const RightSidbarItems = {
    Activities: [
      {
        text: "You searched for",
        url: "#",
        linkText: "Agege, Lagos",
        date: "12/02/2021",
      },
      {
        text: "You viewed",
        url: "#",
        linkText: "Private Room in 4 bedroom house",
        date: "12/02/2021",
      },
      {
        text: "You changed you ",
        url: "#",
        linkText: "password",
        date: "12/20/2021",
      },
    ],

    Notifications: [
      {
        text: "",
        url: "#",
        linkText: "Your receipts was sent to your mail",
        date: "12/02/2021",
      },
      {
        text: "You can now make referalls on Renager",
        url: "#",
        linkText: "",
        date: "12/02/2021",
      },
      {
        text: "You changed your password",
        url: "#",
        linkText: "",
        date: "12/02/2021",
      },
    ],
  };
  const Items = [
    {
      title: "Activitites",
      view: "View All",
      url: "#",
      RightSidbarItems: RightSidbarItems.Activities,
    },
    {
      title: "Activitites",
      view: "View All",
      url: "#",
      RightSidbarItems: RightSidbarItems.Notifications,
    },
  ];
  return (
    <div className="main-dashboard-content">
      {/* Dashboard content */}
      <div className="dashboard-content">
        <Banner />
        <TRT />
        <DashboardProperty />
      </div>

      {/* Dashboard right sidebar */}
      <div className="dashboard-content-right">
        {Items &&
          Items.map((items, index) => (
            <DashboardRigtContainer
              key={index}
              title={items.title}
              view={items.view}
              url={items.url}
              RightSidbarItems={items.RightSidbarItems}
            />
          ))}
      </div>
    </div>
  );
};
export default MainDashboard;
