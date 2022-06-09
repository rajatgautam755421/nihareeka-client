import React, { useState } from "react";
import InfoIcon from "@mui/icons-material/InfoOutlined";
import InventoryIcon from "@mui/icons-material/InventoryOutlined";
import CollectionsIcon from "@mui/icons-material/CollectionsOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import "./Tabs.css";
import General from "../General/General";
import Requirement from "../Requirement/Requirement";
import Details from "../Details/Details";
import Gallery from "../Gallery/Gallery";

const Tabs = ({ courseName, images, loading }) => {
  const [general, setGeneral] = useState(true);
  const [requirement, setRequirement] = useState(false);
  const [details, setDetails] = useState(false);
  const [gallery, setGallery] = useState(false);

  return (
    <>
      <div className="container-fluid tabs__main">
        <div className="row">
          <div
            className={general ? "col-3 tabs__main__col" : "col-3 no__select"}
            onClick={() => {
              setGeneral(!general);
              setDetails(false);
              setRequirement(false);
              setGallery(false);
            }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <InfoIcon
              className={general ? "tabs__icons__selected" : "tabs__icons"}
            />
            <h6
              style={{
                textAlign: "center",
                color: `${general ? "#EC008E" : "black"}`,
              }}
            >
              General
            </h6>
          </div>
          <div
            className={
              requirement ? "col-3 tabs__main__col" : "col-3 no__select"
            }
            onClick={() => {
              setGeneral(false);
              setDetails(false);
              setRequirement(!requirement);
              setGallery(false);
            }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <AssignmentOutlinedIcon
              className={requirement ? "tabs__icons__selected" : "tabs__icons"}
            />
            <h6
              style={{
                textAlign: "center",
                color: `${requirement ? "#EC008E" : "black"}`,
              }}
            >
              Requirement
            </h6>
          </div>
          <div
            className={details ? "col-3 tabs__main__col" : "col-3 no__select"}
            onClick={() => {
              setGeneral(false);
              setDetails(!details);
              setRequirement(false);
              setGallery(false);
            }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <InventoryIcon
              className={details ? "tabs__icons__selected" : "tabs__icons"}
            />
            <h6
              style={{
                textAlign: "center",
                color: `${details ? "#EC008E" : "black"}`,
              }}
            >
              Details
            </h6>
          </div>
          <div
            className={gallery ? "col-3 tabs__main__col" : "col-3 no__select"}
            onClick={() => {
              setGeneral(false);
              setDetails(false);
              setRequirement(false);
              setGallery(!gallery);
            }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <CollectionsIcon
              className={gallery ? "tabs__icons__selected" : "tabs__icons"}
            />
            <h6
              style={{
                textAlign: "center",
                color: `${gallery ? "#EC008E" : "black"}`,
              }}
            >
              Gallery
            </h6>
          </div>
        </div>
      </div>
      {general && <General courseName={courseName} />}
      {requirement && <Requirement courseName={courseName} />}
      {details && <Details courseName={courseName} />}
      {gallery && (
        <Gallery courseName={courseName} images={images} loading={loading} />
      )}
    </>
  );
};

export default Tabs;
