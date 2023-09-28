import React from "react";

import { Link } from "react-router-dom";

import uploadImage from "../../assets/images/uploadPropertyImage.png";
import LeaseTopBar from "../reusable-components/LeaseTopBar";

const Upload = () => {
  return (
    <>
      <div className="flex-all">
        <section className="upload-container">
          <div className="min-none">
            <h2 className="service-provider-h2 upload-h2">Upload Properties</h2>
            <div className="long-line upload-line"></div>
          </div>
          <div className="min-show">
            <h2 className="service-provider-h2 upload-h2">Upload Properties</h2>
          </div>
          <div className="long-line min-none"></div>
          <LeaseTopBar
            img={uploadImage}
            text="Upload Your Properties on Renager"
          />
          <div className="upload-container-all">
            <div className="upload-lease-bcg">
              <Link to="lease">
                <img src="/Upload-Images-Icon/leaseImage.png" alt="lease" />
              </Link>
            </div>

            <div className="upload-sell-bcg">
              <Link to="sell">
                <img src="/Upload-Images-Icon/sellImage.png" alt="sell" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Upload;
