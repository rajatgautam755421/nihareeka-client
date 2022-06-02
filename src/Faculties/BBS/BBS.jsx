import axios from "axios";
import React, { useEffect, useState } from "react";
import Bba from "../BBA/Bba";

const BBS = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "https://nihareeka-college.herokuapp.com/api/v1/gallery/faculty/bbs"
      );
      try {
        console.log(data);
        setImages(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <>
        <Bba images={images} courseName="BBS" />
      </>
    </>
  );
};

export default BBS;
