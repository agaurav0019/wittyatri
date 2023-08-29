import React from 'react';
import "./PackagesPage.css";
import Packages from '../../components/packages/Packages';

function PackagesPage() {
  debugger
    const packageDetails = {
        title: "Unveiling Coorg",
        desc:"A Serene Escape",
        id:"123"
      }
  return (
    <>
      <Packages title={packageDetails.title} desc={packageDetails.desc} id={packageDetails.id}></Packages>
    </>
  )
}

export default PackagesPage