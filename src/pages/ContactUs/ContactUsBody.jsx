import React, { useState } from "react";
import "./ContactUsBody.css";
import img_call from "../../assets/Businessman on a call while sitting - 480x576.png";
// import axios from "axios";

const ContactUsBody = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  function handleButtonClick() {

    const postData = {
      Name: name,
      Email: email,
      Mobile: mobile,
      Message: message,
    };
    console.log(postData)
    
    setName("");
    setEmail("");
    setMobile("");
    setMessage("");
  }

  return (
    <div className="container" style={{ marginTop: "50px" }}>
      <div className="row">
        <div className="col-lg-5 col-md-12 col-sm-12">
        <div style={{ marginTop: "30px" }}>
            <img className="img-fluid" src={img_call} alt="broken" />
        </div>    
        </div>
        <div className="col-lg-7 col-md-12 col-sm-12 text-center">
          <div className="formSection">
            <div
              className="formTitle"
              style={{ paddingLeft: "60px", paddingRight: "60px" }}
            >
              <b>Get In Touch!</b>
            </div>
            <div className="row">
              <div
                className="col-lg-6 col-md-6 col-sm-12 text-start d-flex flex-column mb-3"
                style={{ paddingLeft: "60px", paddingRight: "60px" }}
              >
                <label>Your Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                ></input>
              </div>
              <div
                className="col-lg-6 col-md-6 col-sm-12 text-start d-flex flex-column mb-3"
                style={{ paddingLeft: "60px", paddingRight: "60px" }}
              >
                <label>Mobile</label>
                <input
                  type="text"
                  vlaue={mobile}
                  onChange={(e) => {
                    setMobile(e.target.value);
                  }}
                ></input>
              </div>
              <div
                className="col-lg-6 col-md-6 col-sm-12 text-start d-flex flex-column mb-3"
                style={{ paddingLeft: "60px", paddingRight: "60px" }}
              >
                <label>Your E-mail</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                ></input>
              </div>
              <div
                className="col-lg-12 col-md-12 col-sm-12 text-start d-flex flex-column mb-3"
                style={{ paddingLeft: "60px", paddingRight: "60px" }}
              >
                <label className="mb-3">Comments</label>
                <textarea
                  type="text"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                ></textarea>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="sendMessageBtn"
            onClick={handleButtonClick}
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUsBody;