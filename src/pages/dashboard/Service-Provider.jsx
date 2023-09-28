import React, { useState } from "react";
import UploadImages from "../reusable-components/uploadImages";
import { Link } from "react-router-dom";

import DeleteImg from "../reusable-components/DeleteImg";
import ProfilePicture from "../reusable-components/ProfilePicture";
import BackButton from "../reusable-components/BackButton";
import CopyLink from "../reusable-components/CopyLink";

const ServiceProvider = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [formContent, setFormContent] = useState({
    Address: "",
    City: "",
    State: "",
    Number: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formContent.Address &&
      formContent.City &&
      formContent.Number &&
      formContent.State
    ) {
      setFormOpen(false);
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormContent({ ...formContent, [name]: value });
  };

  const openCloseForm = () => {
    setFormOpen(!formOpen);
  };

  const defaultAddress =
    " No 10, landstone road, old shabolu  Estate, Ogun state.";
  const defaultNum = " 08134578734";

  const newAddress = formContent.City;
  const newState = formContent.State;

  return (
    <section className={`service-provider `}>
      <div className={`flex-all`}>
        <div>
          <div className="min-nav"></div>
          <div className="min-show">
            <BackButton />
          </div>
          <div className="min-none">
            <h2 className="service-provider-h2">Service Provider</h2>
            <div className="long-line"></div>
          </div>
          <div className="flex-direction">
            <div className="top-p service-provider-center">
              <ProfilePicture />
              <p className="name">Olusesan Peter</p>
              <p>Plumber</p>
              <div className="short-line"></div>
              <p>Rating: 4.3</p>
              <div className="short-line"></div>
              <p>Lagos, Nigeria</p>
              <div className="short-line"></div>
              <p>CAC: RT3940209</p>
              <div className="short-line"></div>
              <p>Jobs completed - 115 </p>
            </div>

            <div>
              <div className="min-show">
                <h2 className="service-provider-h2">Service Provider</h2>
                <div className="long-line"></div>
              </div>
              <div className="service-provider-inline">
                <p className="service-provider-first-p ">
                  Your Subscription will expire on 28/04/2021, after which your
                  services will no longer be visible on Renager.
                </p>
                <p className="service-provider-second-p ">
                  Choose from any of our existing subscription plans to renew
                  before being disconnected.{" "}
                  <Link to="/renew">
                    <span className="service-provider-link">Renew</span>
                  </Link>
                </p>
              </div>

              {/*/ Form */}
              {formOpen && (
                <form
                  className="service-provider-form service-provider-inline"
                  onSubmit={handleSubmit}
                >
                  <div className="single-form">
                    <label className="name" htmlFor="Address">
                      Email
                    </label>
                    <br />
                    <input
                      className="service-provider-input"
                      type="email"
                      name="Address"
                      placeholder="OlusesPeter@gmail.com"
                      value={formContent.Address}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-flex">
                    <div className="single-form">
                      <label className="name" htmlFor="City">
                        City
                      </label>
                      <br />
                      <input
                        className="service-provider-input input-city"
                        type="text"
                        name="City"
                        value={formContent.City}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="single-form">
                      <label className="name" htmlFor="firstName">
                        State
                      </label>
                      <br />
                      <input
                        className="service-provider-input input-city"
                        type="text"
                        name="State"
                        value={formContent.State}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="single-form">
                    <label className="name" htmlFor="firstName">
                      Phone Number
                    </label>
                    <br />
                    <input
                      className="service-provider-input input-number"
                      type="number"
                      name="Number"
                      value={formContent.Number}
                      onChange={handleChange}
                    />
                  </div>
                  <button
                    className="service-provider-input service-provider-btn"
                    type="submit"
                  >
                    Update Profile
                  </button>
                </form>
              )}

              <div className="long-line"></div>
              {!formOpen && (
                <div className="service-provider-top-down">
                  <p className="address service-provider-inline">
                    <span className="name ">Address - </span>
                    {newAddress || defaultAddress}, {newState || defaultAddress}{" "}
                    <span
                      onClick={openCloseForm}
                      className="service-provider-link"
                    >
                      Update
                    </span>
                  </p>
                  <p className="number service-provider-inline">
                    <span className="name">Phone Number - </span>
                    {formContent.Number || defaultNum}{" "}
                    <span
                      onClick={openCloseForm}
                      className="service-provider-link"
                    >
                      Update
                    </span>
                  </p>
                </div>
              )}
              <div className="long-line"></div>
              <CopyLink
                text="Share your URL for others to rate your services"
                placeholder="https://www.renager.com/service-provider/olusesan-peter/"
              />
              <div className="long-line"></div>

              <div>
                <UploadImages />
              </div>
              <div className="long-line"></div>

              <div>
                <section className="service-provider-flex service-provider-inline">
                  <h2>My Portfolio</h2>
                  <span className="service-provider-link">Edit</span>
                </section>
                <div className="serviceP-bottom">
                  <DeleteImg />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProvider;
