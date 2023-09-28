import React from "react";
import "../../styles/pages/myAccount.scss";
import {
  SideBarDataOne,
  SideBarDataTwo,
  GetApp,
} from "../../data/Sidebar/data";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { BsPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import PromptComponent from "./logout/prompt-component";
import { useState } from "react";
const MyAccount = () => {
  const [modal, setModal] = useState(0);
  return (
    <div className="my-account">
      <Link to="/" className="home">
        <MdKeyboardArrowLeft className="left-arrow" />
        <p>Home</p>
      </Link>
      <div className="profile-header">
        <p>My Account</p>
        <div className="avatar-container">
          <BsPersonFill className="avatar" />
        </div>
      </div>
      <div className="name">Fatogun Femi</div>
      {/* -----------SideBarDataOne------------------- */}
      <div className="SideBarDataOne">
        <div className="data1-wrapper">
          {SideBarDataOne.map((value) => {
            return (
              <Link to={value.link} className="data1" key={value.id}>
                <p>{value.name}</p>
                <MdKeyboardArrowRight className="right-arrow" />
              </Link>
            );
          })}
        </div>
      </div>

      {/* -----------SideBarDataTwo------------------- */}

      <Link to="/" className="data1">
        <p>Notifications</p>
        <MdKeyboardArrowRight className="right-arrow" />
      </Link>
      <div className="SideBarDataOne">
        <div className="data1-wrapper">
          {SideBarDataTwo.map((value) => {
            return (
              <Link to={value.link} className="data1" key={value.id}>
                <p>{value.name}</p>
                <MdKeyboardArrowRight className="right-arrow" />
              </Link>
            );
          })}
        </div>
      </div>
      {/* -----------Get app and support------------------- */}
      <div className="SideBarDataOne">
        <div className="data1-wrapper">
          {GetApp.map((value) => {
            return (
              <Link to={value.link} className="data1" key={value.id}>
                <p>{value.name}</p>
                <MdKeyboardArrowRight className="right-arrow" />
              </Link>
            );
          })}
        </div>
      </div>
      {/* ----------Log out button------------------- */}
      <button
        className="logout"
        onClick={() => {
          setModal(!modal);
        }}
      >
        Log Out
      </button>

      <PromptComponent
        state={modal}
        setState={setModal}
        text="You are about to signout. You can always login later. "
        buttonLabel="Logout"
      />
    </div>
  );
};

export default MyAccount;
