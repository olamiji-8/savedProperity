import React from "react";
import LeaseTopBar from "./reusable-components/LeaseTopBar";

import UploadImages from "./reusable-components/uploadImages";
import leaseIcon from "../assets/images/leaseIcon.png";
import DeleteImg from "./reusable-components/DeleteImg";
import CommonTop from "./reusable-components/CommonTop";
import DefaultSelect from "./reusable-components/DefaultSelect";

const Lease = () => {
  const option1 = [
    { value: "name", label: "name" },
    { value: "place", label: "place" },
    { value: "time", label: "time" },
  ];

  return (
    <article className="flex-all lease-container">
      <div>
        <div className="min-nav"></div>
        <CommonTop name="Lease" />
        <div className="min-none">
          <div className="min-hide">
            <div className="long-line receipts-line"></div>
            <h3 className="service-provider-h2 upload-h2 lease-h3">
              Fill the Form Below to Lease a Property
            </h3>
          </div>
        </div>

        <LeaseTopBar
          text="Fill the Form Below to Lease a Property"
          img={leaseIcon}
        />

        <section className="lease-container-section">
          {/* First Row */}
          {/*<Select
    //defaultValue={selectValue}
    options={options}
    onChange={handleSelectChange}
    />*/}

          <form action="submit">
            <div className="form-group-two">
              <DefaultSelect name="Type of Property" option={option1} />

              <div className="form-group">
                <label className="label label-hide">
                  Gender
                  <br />
                  <select
                    disabled
                    className="form-select form-select-hide"
                  ></select>
                </label>
              </div>
              <div className="form-group">
                <label className="label label-hide">
                  Gender
                  <br />
                  <select
                    disabled
                    className="form-select form-select-hide"
                  ></select>
                </label>
              </div>
            </div>

            {/* Second Row */}
            <div className="form-group-two">
              <DefaultSelect
                holder="Choose State"
                name="State"
                option={option1}
              />
              <DefaultSelect
                name="Locality"
                holder="Choose Locality"
                option={option1}
              />

              <DefaultSelect
                name="Area"
                holder="Choose Area"
                option={option1}
              />
            </div>

            {/* Third Row */}
            <div className="form-group">
              <label className="label-long label">
                Street
                <br />
                <input
                  className="form-select form-bigger lease-input"
                  placeholder="No 14, Federal Avenue"
                  type="text"
                />
              </label>
            </div>

            {/* Fourth Row */}
            <div className="form-group-two">
              <DefaultSelect
                name="Type of Property"
                holder=""
                option={option1}
              />

              <DefaultSelect name="Sub Type" holder="" option={option1} />
              <div className="form-group">
                <label className="label label-hide">
                  Gender
                  <br />
                  <select disabled className="form-select form-select-hide">
                    <option name="Male">--select--</option>
                    <option name="Female">Female</option>
                    <option name="Others">Others</option>
                  </select>
                </label>
              </div>
            </div>

            {/* Fifth Row */}
            <div className="form-group-two">
              <DefaultSelect name="Bedrooms" holder="" option={option1} />

              <DefaultSelect name="Bathrooms" holder="" option={option1} />

              <DefaultSelect name="Toilets" holder="" option={option1} />
            </div>

            {/* Sixth Row */}
            <div className="form-group-two">
              <div className="form-group">
                <label className="label">
                  Price
                  <br />
                  <div className="">
                    <input
                      className="service-provider-input lease-price form-select"
                      placeholder="5,000,000"
                      type="number"
                      name="Number"
                    />
                  </div>
                </label>
              </div>

              <DefaultSelect name="Domination" holder="" option={option1} />
              <div className="form-group">
                <label className="label">
                  Size(sqm)
                  <br />
                  <input
                    className="form-select lease-input"
                    placeholder="500"
                    type="number"
                  />
                </label>
              </div>
            </div>

            {/* Seventh Row */}
            <div className="form-group-two">
              <div className="form-group">
                <label className="label">
                  Initial Payment
                  <br />
                  <input
                    className="form-select lease-input"
                    placeholder="50,000"
                    type="number"
                  />
                </label>
              </div>
              <div className="form-group">
                <label className="label">
                  Monthly Payment
                  <br />
                  <input
                    className="form-select lease-input"
                    placeholder="100,000"
                    type="number"
                  />
                </label>
              </div>

              <DefaultSelect name="Duration" holder="1 Year" option={option1} />
            </div>

            {/* Eighth Row */}

            <DefaultSelect
              name="Amenities"
              holder="Tiling, AC, Roof, Microwave, TV, Garage, Heater, Borehole, Drainage, Garage"
              option={option1}
            />

            {/* Last Row */}
            <div className="form-group-two">
              <DefaultSelect
                name="What property document do you have?"
                holder=""
                option={option1}
              />

              <DefaultSelect name="Property Type" holder="" option={option1} />

              <DefaultSelect
                name="Property Description"
                holder=""
                option={option1}
              />
            </div>
            <div className="service-provider upload-lease">
              <UploadImages />
            </div>
            <div className="lease-delete-img">
              <DeleteImg />
            </div>
            <div className="form-group-two">
              <DefaultSelect
                name="Date for Property inspection"
                holder=""
                option={option1}
              />

              <DefaultSelect
                name="Time for Property Inspection"
                holder=""
                option={option1}
              />
            </div>
            <div className="agreement">
              <div className="service-provider-top-down ">
                <input type="checkbox" name=" Agreement" id="" />
                <span className="checked">
                  I have read and accepted the Power of Agreement{" "}
                </span>
              </div>
              <div>
                <button
                  className="lease-btn service-provider-input service-provider-btn"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </article>
  );
};

export default Lease;
