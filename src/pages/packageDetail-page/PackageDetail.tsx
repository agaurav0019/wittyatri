import React from 'react'
import { useParams } from 'react-router-dom';

const PackageDetail = (props: any) => {
  const { id } = useParams();
  debugger
  return (
    <div>{id}</div>
  )
}

export default PackageDetail