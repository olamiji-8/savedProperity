import React from "react";
import { MdOutlineNavigateBefore } from "react-icons/md";
import NoActivityIcon from "../../assets/images/no_activities.PNG";
import "../../styles/ui/dashboard/noactivity.scss";

const NoActivity = () => {
  return (
    <div className="no-activity-container">
      {/* Back Icon */}
      <div className="no-activity-container-previcon ">
        <span>
          <a href="">
            <MdOutlineNavigateBefore />
          </a>
        </span>
        Back
      </div>

      <div className="no-activity-container_content">
        <img src={NoActivityIcon} alt="" />
        <span>You have no Recent ctivities</span>
      </div>
    </div>
  );
};

export default NoActivity;
