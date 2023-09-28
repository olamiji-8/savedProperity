import React from "react";
import "../../../styles/ui/dashboard/trt.scss";
import { AiOutlineTransaction } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { BiShapeCircle } from "react-icons/bi";
import { FaMountain } from "react-icons/fa";

// TRANSACTION REFERAL & TOTAL COMPONENTS
function TRT() {
  const trtItems = [
    {
      id: 1,
      icon: <AiOutlineTransaction />,
      amount: 0,
      title: "Transactions",
      viewItem: "View Transactions",
      arrowIcon: <IoIosArrowForward />,
      bgColor: "#4B5FFA",
      url: "/transactions",
    },
    {
      id: 2,
      icon: <BiShapeCircle />,
      amount: 0,
      title: "Referrals",
      viewItem: "View Referrals",
      arrowIcon: <IoIosArrowForward />,
      bgColor: "#FFD74B",
      url: "/referral",
    },
    {
      id: 3,
      icon: <FaMountain />,
      amount: `20, 000, 000, 000`,
      title: "Total",
      viewItem: "View Total",
      arrowIcon: <IoIosArrowForward />,
      bgColor: "#ff4133",
      url: "#",
    },
  ];
  return (
    <div className="trt-container">
      {/* Transactions */}
      <div className="trt-container-content-a">
        <div className="trt-content-icon-title-a">
          <div className="trt-content-icon-a">{trtItems[0].icon}</div>
          <div className="trt-content__amount-a">
            <span>{trtItems[0].amount}</span> {trtItems[0].title}
          </div>
        </div>
        <div className="trt-content__url-a">
          <a href={trtItems[0].url}>
            {" "}
            {trtItems[0].viewItem} <span className="space-a"></span>{" "}
            {trtItems[0].arrowIcon}
          </a>
        </div>
      </div>

      {/* Referrals */}
      <div className="trt-container-content-b">
        <div className="trt-content-icon-title-b">
          <div className="trt-content-icon-b">{trtItems[1].icon}</div>
          <div className="trt-content__amount-b">
            <span>{trtItems[1].amount}</span> {trtItems[1].title}
          </div>
        </div>
        <div className="trt-content__url-b">
          <a href={trtItems[1].url}>
            {" "}
            {trtItems[1].viewItem} <span className="space-b"></span>{" "}
            {trtItems[1].arrowIcon}
          </a>
        </div>
      </div>

      {/* Total */}
      <div className="trt-container-content-c">
        <div className="trt-content-icon-title-c">
          <div className="trt-content-icon-c">{trtItems[2].icon}</div>
          <div className="trt-content__amount-c">
            <span>{trtItems[2].amount}</span> {trtItems[2].title}
          </div>
        </div>
        <div className="trt-content__url-c">
          <a href={trtItems[2].url}>
            {" "}
            {trtItems[2].viewItem} <span className="space-c"></span>{" "}
            {trtItems[2].arrowIcon}
          </a>
        </div>
      </div>
    </div>
  );
}

export default TRT;
