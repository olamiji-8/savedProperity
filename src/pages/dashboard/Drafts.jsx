import React, { useEffect } from "react";
import "../../styles/pages/drafts.scss";
import Text from "../../components/ui/Text";
import { draftData } from "../../data/draft/draft-data";
import { FaRegTrashAlt } from "react-icons/fa";
import { useState } from "react";
import PromptComponent from "../../components/ui/logout/prompt-component";
import { useAxios } from "../../hooks/useFetch";

import emptyimage from "../../assets/images/DraftEmpty.png";

const DraftEmpty = () => {
  return (
    <div className="draft-empty">
      <img src={emptyimage} alt="DraftEmpty" />
      <p>Once you initiate a transaction and save, they will show up here</p>
    </div>
  );
};
const ResponsiveDraft = ({ setModal }) => {
  const [dropdown, setDropdown] = useState(0);
  const handleDropDown = () => {
    if (dropdown === 1) {
      setDropdown(0);
    } else {
      setDropdown(1);
    }
  };
  return (
    <div className="responsive-dropdown">
      <div className="secn-1">
        <p className="text-1" onClick={handleDropDown}>
          Payment for Private 4 Bedroom Apartment with shoes and slippers
        </p>
        <p className="text-2">Tuesday, 22/05/21, 10:00am</p>
      </div>
      <div className={`secn-2 ${dropdown ? "" : "closeDropdown"}`}>
        <div className="item">
          <div className="item-1">
            <div className="content-1">
              <p className="text-1">Last Position</p>
              <p className="text-2">MOU</p>
            </div>
            <div className="content-2">
              <p className="text-1">Transaction Type</p>
              <p className="text-2">Sell</p>
            </div>
          </div>
          <div className="item-2">
            <div className="content-1">
              <p className="text-1">Property Type</p>
              <p className="text-2">Land</p>
            </div>
            <div className="content-2">
              <p className="text-1">Price</p>
              <p className="text-2">$2,000,000</p>
            </div>
          </div>
        </div>
      </div>
      <div className={`secn-3 ${dropdown ? "" : "closeDropdown"}`}>
        <button className="item-1">Resume</button>
        <button
          className="item-2"
          onClick={() => {
            setModal(1);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

const Draft = () => {
  const { data, error, loading } = useAxios({
    method: "get",
    url: "/properties/properties",
  });

  console.log(data, "data");
  // console.log(error, "error!!!!!");
  // console.log(loading, "...loading");

  const [modal, setModal] = useState(0);
  const [viewportWidth, setViewportwidth] = useState(window.innerWidth);
  useEffect(() => {
    const setviewvalue = () => {
      setViewportwidth(window.innerWidth);
    };
    window.addEventListener("resize", setviewvalue);
    return (_) => {
      window.removeEventListener("resize", setviewvalue);
    };
  });

  return (
    <div className="Draft-container">
      <div className="draft-nav-control"></div>
      <div className="Draft-wrapper">
        <div className="text1">
          <Text value="Drafts" />
        </div>

        {viewportWidth <= 799 ? (
          <p className="text2">
            See all your initiated and uncompleted property transactions on
            Renager
          </p>
        ) : null}

        {viewportWidth <= 799 ? <ResponsiveDraft setModal={setModal} /> : null}
        {viewportWidth > 799 ? (
          <div className="draft-head">
            <div className="span-draft-head-2">Details</div>
            <div>Last Position</div>
            <div>Property Type</div>
            <div>Transaction Type</div>
            <div className="span-draft-head-2">Price</div>
          </div>
        ) : (
          ""
        )}
        {/* <DraftEmpty /> */}

        {viewportWidth > 799 ? (
          <div className="section2">
            {draftData.map((value) => {
              return (
                <div className="draft-content" key={value.id}>
                  <div className="span-draft-content">
                    <div className="draft-status">{value.detail.status}</div>
                    <div className="draft-date">{value.detail.Date}</div>
                  </div>
                  <div className="draft-list1">{value.lastPoistion}</div>
                  <div className="draft-list2">{value.PropertyType}</div>
                  <div className="draft-list3">{value.TransactionType}</div>
                  <div className="draft-list4">{value.Price}</div>
                  <div className="draft-list5">
                    <p className="draft-item">Resume</p>
                    <div
                      className="trash"
                      onClick={() => {
                        setModal(1);
                      }}
                    >
                      <FaRegTrashAlt className="trash-icon" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}

        <PromptComponent
          state={modal}
          setState={setModal}
          text="You are about to delete this transaction."
          buttonLabel="Delete"
        />
      </div>
    </div>
  );
};

export default Draft;
