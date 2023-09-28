import React from "react";
import UpdateProfileForm from "../../components/ui/dashboard/UpdateProfileForm";
import "../../styles/ui/dashboard/profile.scss";
import "../../styles/ui/dashboard/dashboardrightcontainer.scss";
import GroupProfile from "../../assets/images/groupprofile.png";
//import ProfilePicture from '../../assets/images/profile.png'
import ProfilePicture from "../../pages/reusable-components/ProfilePicture";
import { MdOutlineNavigateBefore } from "react-icons/md";
import Button from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  return (
    <div className="profile-container">
      <div className="profile-content">
        <div>
          <span onClick={() => navigate(-1)}>
            <a href="">
              <MdOutlineNavigateBefore />
            </a>
            Back
          </span>
        </div>
        <h2>My Profile</h2>

        <div className="profile-picture">
          <ProfilePicture />
          {/*<div className='profile-picture-wraper' >
                        <img src={ProfilePicture} alt="" />
                    </div>*/}
          <div className="profile-picture__name">
            <h3>Olesegun Peter</h3>
            <p>
              {" "}
              <a href="">Change Profile Name</a>
            </p>
          </div>
        </div>
        <UpdateProfileForm />
      </div>
      <div className="dashboard-content-right">
        <div className="dash-right-card ">
          <div className="profile-verify-identity">
            <p>Verify Your Identity</p>
            <img src={GroupProfile} alt="" />
            <p>
              You will only be able to complete transactions on Ranager, once
              your identity has been verified.
            </p>
            <p>This will only take a couple of minutes</p>
            <Button
              text={"Verify Identity"}
              styles={{ backgroundColor: "#4b5ffa" }}
              link="#"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
