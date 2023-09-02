import React from 'react'
import imgOne from "../../assets/side-image.png"
import "./HomePage.css"

const HomePage = () => {
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
                  <button className="btn joinNowBtn">Join now</button>
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