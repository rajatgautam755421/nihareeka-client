import React from "react";
import "./Gallery.css";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
const data1 = [
  {
    src: "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654325163/Faculty%20Members/WhatsApp_Image_2022-06-04_at_12.30.35_PM_g90xs4.jpg",
    href: "#lightbox-1",
    content: "Nihareeka College",
  },
  {
    src: "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654322786/Faculty%20Members/Optimized-IMG_1519_farena.jpg",
    href: "#lightbox-2",
    content: "Nihareeka College",
  },
  {
    src: "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654322439/Faculty%20Members/Optimized-IMG_1567_bhxbq9.jpg",
    href: "#lightbox-3",
    content: "Nihareeka College",
  },
  {
    src: "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654326053/Faculty%20Members/WhatsApp_Image_2022-06-04_at_12.45.34_PM_qubsqr.jpg",
    href: "#lightbox-4",
    content: "Nihareeka College",
  },
  {
    src: "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654325756/Faculty%20Members/WhatsApp_Image_2022-06-04_at_12.40.34_PM_m4cmji.jpg",
    href: "#lightbox-5",
    content: "Nihareeka College",
  },
  {
    src: "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654324660/Staff/WhatsApp_Image_2022-06-04_at_12.21.24_PM_x0tkhe.jpg",
    href: "#lightbox-6",
    content: "Nihareeka College",
  },
  {
    src: "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654343806/Faculty%20Members/WhatsApp_Image_2022-06-04_at_12._4_x7nmjo.jpg",
    href: "#lightbox-7",
    content: "Nihareeka College",
  },
  {
    src: "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654343878/Faculty%20Members/WhatsApp_Image_2022-06-04_at_12.40.34_PM_1_j0l91p.jpg",
    href: "#lightbox-8",
    content: "Nihareeka College",
  },
  {
    src: "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654343943/BCA/res-console.cloudinary_1_bkqt8y.jpg",
    href: "#lightbox-9",
    content: "Nihareeka College",
  },
  {
    src: "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654344011/Bsc.csit/res-console.cloudinary_2_m2dyvv.jpg",
    href: "#lightbox-10",
    content: "Nihareeka College",
  },
  {
    src: "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654344126/BIM/res-console.cloudinary_3_skytrl.jpg",
    href: "#lightbox-11",
    content: "Nihareeka College",
  },
  {
    src: "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654344200/Bsc.csit/res-console.cloudinary_4_evypgn.jpg",
    href: "#lightbox-12",
    content: "Nihareeka College",
  },
  {
    src: "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654344261/BBS/res-console.cloudinary_5_uqbtkt.jpg",
    href: "#lightbox-10",
    content: "Nihareeka College",
  },
  {
    src: "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654344310/BIM/res-console.cloudinary_6_goxbqc.jpg",
    href: "#lightbox-11",
    content: "Nihareeka College",
  },
  {
    src: "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654343450/Faculty%20Members/WhatsApp_Image_2022-06-04_at_12._a0c8u3.jpg",
    href: "#lightbox-12",
    content: "Nihareeka College",
  },
  {
    src: "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654343555/Faculty%20Members/WhatsApp_Image_2022-06-04_at_12._1_ucbcd6.jpg",
    href: "#lightbox-13",
    content: "Nihareeka College",
  },
  {
    src: "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654343645/Faculty%20Members/WhatsApp_Image_2022-06-04_at_12._2_y13ffq.jpg",
    href: "#lightbox-14",
    content: "Nihareeka College",
  },
  {
    src: "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654343745/Faculty%20Members/WhatsApp_Image_2022-06-04_at_12._3_bjneq8.jpg",
    href: "#lightbox-15",
    content: "Nihareeka College",
  },
];

const data2 = [
  {
    id: "lightbox-1",
    content: "Nihareeka College",
    src: "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654325163/Faculty%20Members/WhatsApp_Image_2022-06-04_at_12.30.35_PM_g90xs4.jpg",
  },
  {
    id: "lightbox-2",
    content: "Nihareeka College",
    src: "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654322786/Faculty%20Members/Optimized-IMG_1519_farena.jpg",
  },
  {
    id: "lightbox-3",
    content: "Nihareeka College",
    src: "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654322439/Faculty%20Members/Optimized-IMG_1567_bhxbq9.jpg",
  },
  {
    id: "lightbox-4",
    content: "Nihareeka College",
    src: "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654326053/Faculty%20Members/WhatsApp_Image_2022-06-04_at_12.45.34_PM_qubsqr.jpg",
  },
  {
    id: "lightbox-5",
    content: "Nihareeka College",
    src: "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654325756/Faculty%20Members/WhatsApp_Image_2022-06-04_at_12.40.34_PM_m4cmji.jpg",
  },
  {
    id: "lightbox-6",
    content: "Nihareeka College",
    src: "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654324660/Staff/WhatsApp_Image_2022-06-04_at_12.21.24_PM_x0tkhe.jpg",
  },
  {
    id: "lightbox-7",
    content: "Nihareeka College",
    src: "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654343806/Faculty%20Members/WhatsApp_Image_2022-06-04_at_12._4_x7nmjo.jpg",
  },
  {
    id: "lightbox-8",
    content: "Nihareeka College",
    src: "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654343878/Faculty%20Members/WhatsApp_Image_2022-06-04_at_12.40.34_PM_1_j0l91p.jpg",
  },
  {
    id: "lightbox-9",
    content: "Nihareeka College",
    src: "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654343943/BCA/res-console.cloudinary_1_bkqt8y.jpg",
  },

  {
    id: "lightbox-10",
    content: "Nihareeka College",
    src: "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654344011/Bsc.csit/res-console.cloudinary_2_m2dyvv.jpg",
  },
  {
    id: "lightbox-11",
    content: "Nihareeka College",
    src: "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654344126/BIM/res-console.cloudinary_3_skytrl.jpg",
  },
  {
    id: "lightbox-12",
    content: "Nihareeka College",
    src: "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654344200/Bsc.csit/res-console.cloudinary_4_evypgn.jpg",
  },
  {
    id: "lightbox-10",
    content: "Nihareeka College",
    src: "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654344261/BBS/res-console.cloudinary_5_uqbtkt.jpg",
  },
  {
    id: "lightbox-11",
    content: "Nihareeka College",
    src: "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654344310/BIM/res-console.cloudinary_6_goxbqc.jpg",
  },
  {
    id: "lightbox-12",
    content: "Nihareeka College",
    src: "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654343450/Faculty%20Members/WhatsApp_Image_2022-06-04_at_12._a0c8u3.jpg",
  },
  {
    id: "lightbox-13",
    content: "Nihareeka College",
    src: "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654343555/Faculty%20Members/WhatsApp_Image_2022-06-04_at_12._1_ucbcd6.jpg",
  },
  {
    id: "lightbox-14",
    content: "Nihareeka College",
    src: "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654343645/Faculty%20Members/WhatsApp_Image_2022-06-04_at_12._2_y13ffq.jpg",
  },
  {
    id: "lightbox-15",
    content: "Nihareeka College",
    src: "https://res.cloudinary.com/mechi-pharma123/image/upload/v1654343745/Faculty%20Members/WhatsApp_Image_2022-06-04_at_12._3_bjneq8.jpg",
  },
];

const Gallery = () => {
  return (
    <>
      <div className="container-fluid gallery__main__image">
        <div className="container gallery__main__bba">
          <ImageOutlinedIcon className="gallery__main__icon" />
        </div>
        <h1 style={{ color: "#0D0D80", position: "relative" }}>Gallery</h1>
      </div>

      <div className="container-fluid mt-4" style={{ marginTop: "20px" }}>
        <div id="gallery">
          {data1.map((value) => {
            return (
              <>
                <div className="main__gallery">
                  <img src={value.src} />
                  <a href={value.href} style={{ fontSize: "15px" }}>
                    {value.content}
                  </a>
                </div>
              </>
            );
          })}
        </div>
        {data2.map((value) => {
          return (
            <>
              <div
                className="lightbox"
                id={value.id}
                style={{ marginTop: "45px" }}
              >
                <div className="content">
                  <img src={value.src} />

                  <div className="title">
                    <b>{value.content}</b>
                  </div>
                  <a className="close" href="#gallery" />
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
