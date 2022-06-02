import axios from "axios";
import React, { useEffect, useState } from "react";
import Bba from "../BBA/Bba";

const BCA = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "https://nihareeka-college.herokuapp.com/api/v1/gallery/faculty/bca"
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
        <Bba images={images} courseName="BCA" />
      </>
    </>
  );
};

export default BCA;
