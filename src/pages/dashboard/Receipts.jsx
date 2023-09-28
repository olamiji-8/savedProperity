import React from "react";

import receiptsImage from "../../assets/images/receiptsImage.png";
import LeaseTopBar from "../reusable-components/LeaseTopBar";
// import LeaseTopBar from '../reusable-components-vincent/LeaseTopBar';

const Receipts = () => {
  return (
    <>
      <div className="flex-all">
        <section>
          <div className="min-nav"></div>
          <div className="min-none">
            <h2 className="service-provider-h2 upload-h2">Receipts</h2>
            <div className="min-hide">
              <div className="long-line receipts-line"></div>
              <h3 className="service-provider-h2 upload-h2 receipts-h3">
                Access to the receipts of all transactions made on Renager
              </h3>
            </div>
          </div>
          <div className="min-show">
            <h2 className="service-provider-h2 upload-h2">Receipts</h2>
          </div>
          <div className="long-line min-none receipts-line"></div>
          <LeaseTopBar
            img={receiptsImage}
            text="Access to the receipts of all transactions made on Renager"
          />

          <div className="flex-receipts">
            <div>
              <p>Payment for Due Diligence </p>
              <h5>12/02/2021</h5>
            </div>
            <div>
              <a href={receiptsImage} download>
                Download
              </a>
            </div>
          </div>
          <div className="long-line receipts-line"></div>

          <div className="flex-receipts">
            <div>
              <p>Virtual Tour Payment </p>
              <h5>12/02/2021</h5>
            </div>
            <div>
              <a href={receiptsImage} download>
                Download
              </a>
            </div>
          </div>
          <div className="long-line receipts-line"></div>
        </section>
      </div>
    </>
  );
};

export default Receipts;
