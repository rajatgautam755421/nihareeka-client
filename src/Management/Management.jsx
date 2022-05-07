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
              post={"Principal"}
              image={
                "https://scontent.fbir1-1.fna.fbcdn.net/v/t1.6435-9/125768267_411265553572771_7708560830080620552_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=7vo5O8xIUeAAX_3T9-E&_nc_ht=scontent.fbir1-1.fna&oh=00_AT_C9J5bRA8ySe_EjQV-fN-cVjMzjnZ-5DXegHqyaG_eNg&oe=6285F7D8"
              }
            />
            <ManagamentInfo
              name={"Rupesh Khatiwada"}
              post={"Chairman"}
              image={
                "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/274753098_662582745191764_8579588804535381888_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=myK9QqFz13IAX__TB0H&tn=66lPQ8t7KYrn0e9f&_nc_ht=scontent.fbir1-1.fna&oh=00_AT8tYReGN3tcu2GslrtPG6NJm3rFEmO5bV3o3AxQUObcwg&oe=6263911D"
              }
            />
            <ManagamentInfo
              name={"Gyanandra Karki"}
              post={"Dean"}
              image={
                "https://scontent.fbir1-1.fna.fbcdn.net/v/t1.6435-9/81232290_797713463983003_3835381232410034176_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=ad2b24&_nc_ohc=NV3y6LNEEY8AX9LB1Cb&_nc_ht=scontent.fbir1-1.fna&oh=00_AT93pMksNA5mIHZ9nSitC7sqW3NlDOv4bNWCFGukLod8gQ&oe=6282C4DE"
              }
            />
            <ManagamentInfo
              name={"Krishna Dev Bahadar"}
              post={"HOD"}
              image={
                "https://scontent.fbir1-1.fna.fbcdn.net/v/t1.6435-9/142427306_1107472619697612_2193299936101926466_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=ad2b24&_nc_ohc=B4cfvLSsZ20AX_zkvOc&tn=66lPQ8t7KYrn0e9f&_nc_ht=scontent.fbir1-1.fna&oh=00_AT_qC8WbJxHEBRm3CEFJraB7437T2-rv2qK7mZmSg3qVbw&oe=62845D7C"
              }
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Management;