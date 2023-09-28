import React, { useEffect } from "react";
import "../../styles/pages/drafts.scss";
import Text from "./Heading-text/text";
import DraftEmpty from "../../pages/Drafts/draft-empty/draft-empty";
import { draftData } from "./draft-data";
import { FaRegTrashAlt } from "react-icons/fa";
import { useState } from "react";
import PromptComponent from "../../components/ui/logout/prompt-component";
import ResponsiveDraft from "./responsiveDropdown";

import DashboardSideBar from "../../layouts/dashboard/Sidebar";
import { useAxios } from "../../hooks/useFetch";
import Navigation from "../../layouts/Navbar";

const Draft = () => {
  // const { data, error, loading } = useAxios({
  //   method: "get",
  //   url: "/properties/properties",
  // });

  // console.log(data, "data");
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
      <div className="draft-nav-control">
        <Navigation />
      </div>

      <DashboardSideBar />
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
