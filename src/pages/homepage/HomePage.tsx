import React from 'react'
import imgOne from "../../assets/side-image.png"
import "./HomePage.css"
import { useNavigate } from 'react-router-dom';

// const redirectToGoogleForm = () => {
//   // Define the URL of your Google Form
//   const googleFormURL = 'https://docs.google.com/forms/your-form-url-here';

//   // Use window.location.href to redirect the user to the Google Form
//   window.location.href = googleFormURL;
// };

const HomePage = () => {
  const navigate = useNavigate();
  const onclickhandler= ()=> {
    navigate("/ContactUs")
  }
  return (
    <div>
      <>
        <div className="mb-5 container">
          <div className="row" style={{padding:"7% 0%"}}>
            <div className="col-lg-7 col-md-12 col-sm-12 d-flex align-items-center mb-5">
              <div className="body-top">
                <div className="tagline-question">Already in travel business?</div>
                <div className="tagline">
                  <h1>One stop solution to host your business for the trippy souls</h1>
                </div>
                <div className="join-button">
                  <button className="btn joinNowBtn" onClick={onclickhandler}>Join now</button>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12 mb-3 d-flex">
              <div>
                <img className="img-fluid" src={imgOne} alt="aside"></img>
              </div>
            </div>
          </div>
        </div>
        {/* <GetStarted></GetStarted> */}
      </>
    </div>
  )
}

export default HomePage