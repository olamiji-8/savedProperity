import React from "react";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

import Footer from "../layouts/Footer";
import Button from "../components/ui/Button";
import "../styles/pages/due.scss";

const Due = () => {
  const [signedIn, setSignedIn] = useState(true);
  const [modal, setModal] = useState(false);

  const submitBtn = (e) => {
    e.preventDefault();
    setModal(true);
  };

  const [uploadContent, setUploadContent] = useState("");

  const changeUpload = (e) => {
    setUploadContent(e.target.files[0].name);
  };

  const chooseFile = (e) => {
    e.preventDefault();
    const btn = document.querySelector("#file");
    btn.click();
  };

  const DueModal = () => {
    return (
      <div className="due-modal-container">
        <section className="due-modal">
          <FaTimes
            onClick={() => setModal(false)}
            className="due-modal-close"
          />
          <p>
            Your due diligence will be available in the next 5-7 working days.
            It will be sent to your registered email address but you can also
            find it in the receipts section on your dashboard
          </p>
          <Button
            text="Go to Reciepts Page"
            link="/receipts"
            styles={{
              border: "0%",
              backgroundColor: "inherit",
              color: "#4B5FFA",
              fontSize: "16px",
              fontWeight: 600,
              margin: "auto",
            }}
          />
        </section>
      </div>
    );
  };

  return (
    <div className="due-container">
      <section className="due-section">
        <p className="due-section-text">
          You can request to do a due diligence check for any property you want
          on Renager, you pay a sum of N15,000, and wait for 5-7 working days
          for your document.
        </p>
        <form action="" className="due-section-form">
          <p>
            <label htmlFor="fullname" className="due-section-text">
              Full Name
            </label>
            <br />
            <input type="text" name="" id="fullname" />
          </p>
          <p>
            <label htmlFor="email" className="due-section-text">
              E-mail
            </label>
            <br />
            <input type="email" name="" id="email" />
          </p>
          <p>
            <label htmlFor="address" className="due-section-text">
              Address
            </label>
            <br />
            <input type="text" name="" id="address" />
          </p>
          <p className="due-section-form-select">
            <select aria-label="Select menu example">
              <option selected>Select the type of document you have</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </p>
          <p>
            <label htmlFor="file" className="due-section-text">
              Upload Property Document
            </label>{" "}
            <br />
            <label htmlFor="file" className="due-section-form-file">
              <input
                type="text"
                name=""
                id=""
                disabled
                value={uploadContent}
                onChange={(e) => setUploadContent(e.target.value)}
                placeholder="Drag & Drop Images Here"
              />
              <input
                type="file"
                name=""
                hidden
                id="file"
                onChange={changeUpload}
                accept=".pdf, image/jpg, image/png, image/jpeg"
              />
              <button onClick={chooseFile}>Choose file</button>
            </label>{" "}
            <br />
            <span>Supports: JPG, JPEG2000, PNG, PDF</span>
          </p>

          <p className="due-section-form-button">
            {signedIn ? (
              <button onClick={submitBtn}>Pay N15,000</button>
            ) : (
              <Button
                text="Pay N15,000"
                link="/due"
                styles={{
                  backgroundColor: "#c8cad4",
                  color: "#455980",
                  padding: "0.5rem 1rem",
                  borderRadius: "0%",
                  fontWeight: 700,
                }}
              />
            )}
            {signedIn || <span>**Sign in to access feature**</span>}
          </p>
        </form>
      </section>
      <Footer />
      {modal && <DueModal />}
    </div>
  );
};

export default Due;
