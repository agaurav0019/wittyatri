import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Packages.css";

const Packages = (props: any) => {
  console.log(props.id)
  const [id, setId] = useState(props.id);

  const navigate = useNavigate();

  const addPackageHandler = (e: any) => {
    console.log("Add Package Button Clicked!!");
  };

  const onDetailClickHandler = (event:any, id:any) =>{
    navigate(`/package-detail/${id}`);
    debugger
    console.log(event, id)
  }
  return (
    <>
      <div className="container pt-3 pb-3 mt-2">
        <div className="d-flex justify-content-between">
          <h2>Packages</h2>
          <button
            className="btn btn-md btn-primary"
            onClick={addPackageHandler}
          >
            Add Packages
          </button>
        </div>

        <div className="row mt-5">
          <div className="col-lg-3 col-md-4 col-sm-12 mb-3">
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1584467541268-b040f83be3fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsJTIwZGVzdGluYXRpb258ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h3 className="card-title">{props.title}</h3>
                <p className="card-text fs-4">{props.desc}</p>
                <div className="d-flex justify-content-end">
                  <button className="btn btn-primary btn-lg" onClick={(e)=>{onDetailClickHandler(e, id)}}>Details</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12 mb-3">
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1584467541268-b040f83be3fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsJTIwZGVzdGluYXRpb258ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h3 className="card-title">{props.title}</h3>
                <p className="card-text fs-4">{props.desc}</p>
                <div className="d-flex justify-content-end">
                  <button className="btn btn-primary btn-lg">Details</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12 mb-3">
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1584467541268-b040f83be3fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsJTIwZGVzdGluYXRpb258ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h3 className="card-title">{props.title}</h3>
                <p className="card-text fs-4">{props.desc}</p>
                <div className="d-flex justify-content-end">
                  <button className="btn btn-primary btn-lg">Details</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12 mb-3">
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1584467541268-b040f83be3fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsJTIwZGVzdGluYXRpb258ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h3 className="card-title">{props.title}</h3>
                <p className="card-text fs-4">{props.desc}</p>
                <div className="d-flex justify-content-end">
                  <button className="btn btn-primary btn-lg" onClick={(e)=>{onDetailClickHandler(e, id)}}>Details</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Packages;
