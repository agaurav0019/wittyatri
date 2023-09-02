import React from "react";
import "./PackageDesc.css";

const PackageDesc = () => {
  return (
    <>
      <div className="container mt-4">
        <div className="row p-3">
          <div className="col-lg-8 col-md-8 col-sm-12">
            <h1>Unveiling Coorg: A Serene Escape</h1>
            <div>
              <h3>Overview</h3>
              <p>
                Coorg is a landlocked district in the State of Karnataka,
                officially known as Kodagu. The district is spread across an
                area of 4,102 square kilometers. Area-wise Coorg is bigger than
                the State of Goa. Most of the area in Coorg is hilly and covered
                with forests and plantations. Coffee plantations being the most
                visible part of Coorg. Only Kushalnagar town and the areas
                around it is in the plains (flat land), the rest of Coorg is
                mountainous with hills and valleys crisscrossing the landscape.
                Coorg has an average elevation of around 3000 to 5000 feet above
                sea level. Coorg is rich is biodiversity and is a fragile
                eco-system. Three wildlife sanctuaries and one reserved forest
                in Coorg are listed as World Heritage Site, by UNESCO .
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card" style={{minHeight:"400px"}}>
                Pricing Details
            </div>
            <button className="w-100 btn btn-success btn-md mt-2">
                Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PackageDesc;
