import React from "react";
import "./Gallery.css";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
const data1 = [
  {
    src: "https://res.cloudinary.com/mechi-pharma123/image/upload/v1650553196/BBS/IMG_1622-min_rlpjxy.jpg",
    href: "#lightbox-1",
    content: "Nihareeka College",
  },
  {
    src: "https://res.cloudinary.com/mechi-pharma123/image/upload/v1650553379/Bsc.csit/IMG_1577-min_lqzddh.jpg",
    href: "#lightbox-2",
    content: "Nihareeka College",
  },
  {
    src: "https://res.cloudinary.com/mechi-pharma123/image/upload/v1650553377/Bsc.csit/IMG_1567-min_l6zrv1.jpg",
    href: "#lightbox-3",
    content: "Nihareeka College",
  },
  {
    src: "https://res.cloudinary.com/mechi-pharma123/image/upload/v1650553376/Bsc.csit/library2-min_jgcz4g.jpg",
    href: "#lightbox-4",
    content: "Nihareeka College",
  },
  {
    src: "https://res.cloudinary.com/mechi-pharma123/image/upload/v1650553376/Bsc.csit/IMG_1605-min_xfk9zp.jpg",
    href: "#lightbox-5",
    content: "Nihareeka College",
  },
  {
    src: "https://res.cloudinary.com/mechi-pharma123/image/upload/v1650553306/BIM/IMG_1503-min_px3uwe.jpg",
    href: "#lightbox-6",
    content: "Nihareeka College",
  },
  {
    src: "https://res.cloudinary.com/mechi-pharma123/image/upload/v1650553304/BIM/IMG_1487-min_cgil1y.jpg",
    href: "#lightbox-7",
    content: "Nihareeka College",
  },
  {
    src: "https://res.cloudinary.com/mechi-pharma123/image/upload/v1650553300/BIM/IMG_1511-min_perxp8.jpg",
    href: "#lightbox-8",
    content: "Nihareeka College",
  },
  {
    src: "https://res.cloudinary.com/mechi-pharma123/image/upload/v1650553300/BIM/IMG_1515-min_cysmko.jpg",
    href: "#lightbox-9",
    content: "Nihareeka College",
  },
  {
    src: "https://res.cloudinary.com/mechi-pharma123/image/upload/v1650553193/BBS/IMG_1627-min_mmh8l2.jpg",
    href: "#lightbox-10",
    content: "Nihareeka College",
  },
  {
    src: "https://res.cloudinary.com/mechi-pharma123/image/upload/v1650553193/BBS/IMG_1625-min_bdsuq7.jpg",
    href: "#lightbox-11",
    content: "Nihareeka College",
  },
  {
    src: "https://res.cloudinary.com/mechi-pharma123/image/upload/v1650553255/BCA/IMG_1547-min_xcmcdp.jpg",
    href: "#lightbox-12",
    content: "Nihareeka College",
  },
  {
    src: "https://res.cloudinary.com/mechi-pharma123/image/upload/v1650553252/BCA/IMG_1549-min_dzleow.jpg",
    href: "#lightbox-10",
    content: "Nihareeka College",
  },
  {
    src: "https://res.cloudinary.com/mechi-pharma123/image/upload/v1650553251/BCA/IMG_1539-min_cetozd.jpg",
    href: "#lightbox-11",
    content: "Nihareeka College",
  },
];

const data2 = [
  {
    id: "lightbox-1",
    content: "Nihareeka College",
    src: "https://res.cloudinary.com/mechi-pharma123/image/upload/v1650553196/BBS/IMG_1622-min_rlpjxy.jpg",
  },
  {
    id: "lightbox-2",
    content: "Nihareeka College",
    src: "https://res.cloudinary.com/mechi-pharma123/image/upload/v1650553379/Bsc.csit/IMG_1577-min_lqzddh.jpg",
  },
  {
    id: "lightbox-3",
    content: "Nihareeka College",
    src: "https://res.cloudinary.com/mechi-pharma123/image/upload/v1650553377/Bsc.csit/IMG_1567-min_l6zrv1.jpg",
  },
  {
    id: "lightbox-4",
    content: "Nihareeka College",
    src: "https://res.cloudinary.com/mechi-pharma123/image/upload/v1650553376/Bsc.csit/library2-min_jgcz4g.jpg",
  },
  {
    id: "lightbox-5",
    content: "Nihareeka College",
    src: "https://res.cloudinary.com/mechi-pharma123/image/upload/v1650553376/Bsc.csit/IMG_1605-min_xfk9zp.jpg",
  },
  {
    id: "lightbox-6",
    content: "Nihareeka College",
    src: "https://res.cloudinary.com/mechi-pharma123/image/upload/v1650553306/BIM/IMG_1503-min_px3uwe.jpg",
  },
  {
    id: "lightbox-7",
    content: "Nihareeka College",
    src: "https://res.cloudinary.com/mechi-pharma123/image/upload/v1650553304/BIM/IMG_1487-min_cgil1y.jpg",
  },
  {
    id: "lightbox-8",
    content: "Nihareeka College",
    src: "https://res.cloudinary.com/mechi-pharma123/image/upload/v1650553300/BIM/IMG_1511-min_perxp8.jpg",
  },
  {
    id: "lightbox-9",
    content: "Nihareeka College",
    src: "https://res.cloudinary.com/mechi-pharma123/image/upload/v1650553300/BIM/IMG_1515-min_cysmko.jpg",
  },

  {
    id: "lightbox-10",
    content: "Nihareeka College",
    src: "https://res.cloudinary.com/mechi-pharma123/image/upload/v1650553193/BBS/IMG_1627-min_mmh8l2.jpg",
  },
  {
    id: "lightbox-11",
    content: "Nihareeka College",
    src: "https://res.cloudinary.com/mechi-pharma123/image/upload/v1650553193/BBS/IMG_1625-min_bdsuq7.jpg",
  },
  {
    id: "lightbox-12",
    content: "Nihareeka College",
    src: "https://res.cloudinary.com/mechi-pharma123/image/upload/v1650553255/BCA/IMG_1547-min_xcmcdp.jpg",
  },
  {
    id: "lightbox-10",
    content: "Nihareeka College",
    src: "https://res.cloudinary.com/mechi-pharma123/image/upload/v1650553252/BCA/IMG_1549-min_dzleow.jpg",
  },
  {
    id: "lightbox-11",
    content: "Nihareeka College",
    src: "https://res.cloudinary.com/mechi-pharma123/image/upload/v1650553251/BCA/IMG_1539-min_cetozd.jpg",
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
