import React, { useContext, useState } from "react";
import { PinContext } from "../App";

const DisplayData = () => {
  const {
    data,
    loading,
    pincode,
    setFilteredText,
    filteredOffices,
    filteredText,
    postOffice,
  } = useContext(PinContext);

  console.log("Pincontect data:", data);
  if (loading) {
    return <div className="loader"></div>;
  }
  if (!data || !data.PostOffice) {
    return <h1>No data available. Please enter a valid pincode.</h1>;
  }
  const listToRender = filteredText ? filteredOffices : data.PostOffice;

  return (
    <div className="container">
      <h1 className="pincode-num">Pincode:{pincode}</h1>
      <p className="found-msg">{data.Message}</p>
        <div className="filter-div">
          <i className="bx bx-search"></i>
          <input
            type="text"
            onChange={(e) => {
              const value = e.target.value;
              setFilteredText(value);
            }}
            placeholder="Filter"
            name=""
            id=""
          />
        </div>
 
        <div className="pin-datacontainer">
          {listToRender.map((office, index) => (
            <div key={index} className="pincode-data">
              <p>
                <strong>Name:</strong> {office.Name}
              </p>
              <p>
                <strong>Branch Type:</strong> {office.BranchType}
              </p>
              <p>
                <strong>Delivery Status:</strong> {office.DeliveryStatus}
              </p>
              <p>
                <strong>District:</strong> {office.District}
              </p>
              <p>
                <strong>Division:</strong> {office.Division}
              </p>
            </div>
          ))}

          {/* {filteredText?postOffice.map((office, index) => (
          <div key={index} className="pincode-data">
            <p>
              <strong>Name:</strong> {office.Name}
            </p>
            <p>
              <strong>Branch Type:</strong> {office.BranchType}
            </p>
            <p>
              <strong>Delivery Status:</strong> {office.DeliveryStatus}
            </p>
            <p>
              <strong>District:</strong> {office.District}
            </p>
            <p>
              <strong>Division:</strong> {office.Division}
            </p>
          </div>
        )) : data.PostOffice.map((office, index) => (
          <div key={index} className="pincode-data">
            <p>
              <strong>Name:</strong> {office.Name}
            </p>
            <p>
              <strong>Branch Type:</strong> {office.BranchType}
            </p>
            <p>
              <strong>Delivery Status:</strong> {office.DeliveryStatus}
            </p>
            <p>
              <strong>District:</strong> {office.District}
            </p>
            <p>
              <strong>Division:</strong> {office.Division}
            </p>
          </div>
        ))} */}

          {/* {data.PostOffice.map((office, index) => (
          <div key={index} className="pincode-data">
            <p>
              <strong>Name:</strong> {office.Name}
            </p>
            <p>
              <strong>Branch Type:</strong> {office.BranchType}
            </p>
            <p>
              <strong>Delivery Status:</strong> {office.DeliveryStatus}
            </p>
            <p>
              <strong>District:</strong> {office.District}
            </p>
            <p>
              <strong>Division:</strong> {office.Division}
            </p>
          </div>
        ))} */}
        </div>
      </div>
  );
};

export default React.memo(DisplayData);
