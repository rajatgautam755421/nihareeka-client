import React from "react";
import PageInfo from "../PageInfo/PageInfo";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ManagamentInfo from "./ManagamentInfo";

function Management() {
  {
    // image, name, post, fa, tw, wh;
  }
  return (
    <>
      <PageInfo title={"Management Team"} Icon={PeopleAltOutlinedIcon} />

      <section className="text-gray-600 body-font">
        <div className="container px-8 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <ManagamentInfo
              name={"Amit Dhakal"}
              post={"Campus chief"}
              image={
                "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654265140/Staff/amit_xlgfq2.jpg"
              }
              fa="https://www.facebook.com/amit.dhakal.98"
              tw="https://twitter.com/"
              wh="https://www.whatsapp.com/"
            />
            <ManagamentInfo
              name={"Rupesh Khatiwada"}
              post={"Chairman"}
              image={
                "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654265184/Staff/rupesh_jyrq2a.jpg"
              }
              fa="https://www.facebook.com/rupesh.khatiwada.733"
              tw="https://twitter.com/"
              wh="https://www.whatsapp.com/"
            />
            <ManagamentInfo
              name={"Dipesh Bastola"}
              post={"Vice Chairman"}
              image={
                "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654265338/Staff/sipesh_dkoyo6.jpg"
              }
              fa="https://www.facebook.com/dpdipesh.bastola"
              tw="https://twitter.com/"
              wh="https://www.whatsapp.com/"
            />
            <ManagamentInfo
              name={"Gyanandra Karki"}
              post={"Director"}
              image={
                "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654265274/Staff/gyanu_qgq4pl.jpg"
              }
              fa="https://www.facebook.com/gyanendra.karki.54"
              tw="https://twitter.com/"
              wh="https://www.whatsapp.com/"
            />
            <ManagamentInfo
              name={"Mahesh Niraula"}
              post={"Director"}
              image={
                "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654265305/Staff/mahesh_lbhb0k.jpg"
              }
              fa="https://www.facebook.com/profile.php?id=100005516775561"
              tw="https://twitter.com/"
              wh="https://www.whatsapp.com/"
            />
            <ManagamentInfo
              name={"Tulsi Khatiwada"}
              post={"Director"}
              image={
                "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654265391/Staff/tulsi_midw3j.jpg"
              }
              fa="https://www.facebook.com/tulshi.khatiwada.7"
              tw="https://twitter.com/"
              wh="https://www.whatsapp.com/"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Management;
