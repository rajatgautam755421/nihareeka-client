import React from "react";
import "./FacultyMem.css";
import FacultyData from "./FacultyData";
import PageInfo from "../PageInfo/PageInfo";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";

const FacultyMem = () => {
  return (
    <>
      <PageInfo title={"Faculty Members"} Icon={PeopleAltOutlinedIcon} />
      <h1 style={{ textAlign: "center", color: "#D90081", paddingTop: "40px" }}>
        <b>Co-ordinators</b>
      </h1>{" "}
      <section className=" text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <FacultyData
              name={"Er. Hareram Kamat"}
              image={
                "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654319881/Faculty%20Members/WhatsApp_Image_2022-06-04_at_11.02.35_AM_pgkvda.jpg"
              }
              desc="HOD"
              post={"HOD"}
            />
            <FacultyData
              name={"Krishna Dev Bahadar"}
              image={
                "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654320183/Faculty%20Members/WhatsApp_Image_2022-06-04_at_11.07.52_AM_kyi6da.jpg"
              }
              desc="BIM Co-ordinator"
              post={"Co-ordinator"}
            />
            <FacultyData
              name={"Ujjwal Rijal"}
              image={
                "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654319621/Faculty%20Members/ujjwal_zaf2up.jpg"
              }
              desc="BCA Co-ordinator"
              post={"Co-ordinator"}
            />
            <FacultyData
              name={"Jiwan Dhamala"}
              image={
                "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654319935/Faculty%20Members/WhatsApp_Image_2022-06-04_at_11.03.47_AM_txq2jo.jpg"
              }
              desc="BBS Co-ordinator"
              post={"Co-ordinator"}
            />
          </div>
        </div>
      </section>{" "}
      <h1 style={{ textAlign: "center", color: "#D90081" }}>
        <b>Lecturers</b>
      </h1>{" "}
      <section className="mb-5 text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <FacultyData
              name={"Er. Hareram Kamat"}
              image={
                "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654319881/Faculty%20Members/WhatsApp_Image_2022-06-04_at_11.02.35_AM_pgkvda.jpg"
              }
            />
            <FacultyData
              name={"Krishna Dev Bahadar"}
              image={
                "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654320183/Faculty%20Members/WhatsApp_Image_2022-06-04_at_11.07.52_AM_kyi6da.jpg"
              }
            />
            <FacultyData
              name={"Ujjwal Rijal"}
              image={
                "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654319621/Faculty%20Members/ujjwal_zaf2up.jpg"
              }
            />
            <FacultyData
              name={"Jiwan Dhamala"}
              image={
                "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654319935/Faculty%20Members/WhatsApp_Image_2022-06-04_at_11.03.47_AM_txq2jo.jpg"
              }
            />
            <FacultyData
              name={"Mahesh Nepal"}
              image={
                "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654319642/Faculty%20Members/mahesh_hyelnz.jpg"
              }
            />
            <FacultyData
              name={"Ankit Taparia"}
              image={
                "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654320871/Faculty%20Members/ankit_yck8wx.jpg"
              }
            />
            <FacultyData
              name={"Sandrab Neupane"}
              image={
                "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654320933/Faculty%20Members/sandrav_omqzhu.jpg"
              }
            />
            <FacultyData
              name={"Ram Pd. Pokharel"}
              image={
                "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654320997/Faculty%20Members/Ram_sir_zkykpv.jpg"
              }
            />
            <FacultyData
              name={"Kishor Giri"}
              image={
                "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654321035/Faculty%20Members/Kishor_ty0r4c.jpg"
              }
            />
            <FacultyData
              name={"Keshav Kharal"}
              image={
                "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654321097/Faculty%20Members/keshav_sir_flf82q.jpg"
              }
            />
            <FacultyData
              name={"Sandip Mishra"}
              image={
                "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654321172/Faculty%20Members/sandip_idkeib.jpg"
              }
            />
            <FacultyData
              name={"Sanu Koirala"}
              image={
                "https://res.cloudinary.com/mechi-pharma123/image/upload/v1655030240/Faculty%20Members/sanu_kgdw8x.jpg"
              }
            />
            <FacultyData
              name={"Alina Lamichhane"}
              image={
                "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654321822/Faculty%20Members/WhatsApp_Image_2022-06-04_at_11.29.43_AM_sr6y4j.jpg"
              }
            />
            <FacultyData
              name={"Tanka Mahat"}
              image={
                "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654321383/Faculty%20Members/anil_sandaliya_evhn2w.jpg"
              }
            />
            <FacultyData
              name={"Sanjay Mandal"}
              image={
                "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654321434/Faculty%20Members/Sanjay_vxlsgw.jpg"
              }
            />
            <FacultyData
              name={"Kamal Kishore Shrivastav"}
              image={
                "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654321559/Faculty%20Members/kamal_xtkyyj.jpg"
              }
            />
            <FacultyData
              name={"Nawal Kishore Shrivastav"}
              image={
                "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654321633/Faculty%20Members/nawal_nple9j.jpg"
              }
            />{" "}
            <FacultyData
              name={"Jiwachha Shah"}
              image={
                "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654321887/Faculty%20Members/WhatsApp_Image_2022-06-04_at_11.36.12_AM_bvhwii.jpg"
              }
            />
            <FacultyData
              name={"Nawajit Pradhan"}
              image={
                "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654321956/Faculty%20Members/nawajit_cdrhoo.jpg"
              }
            />
            <FacultyData
              name={"Pankaj Bhattarai"}
              image={
                "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654322133/Faculty%20Members/pankaj_zpjcmz.jpg"
              }
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default FacultyMem;
