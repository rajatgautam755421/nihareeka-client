import axios from "axios";
import React, { useEffect, useState } from "react";
import Bba from "../BBA/Bba";

const BHM = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/gallery/faculty/bhm"
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
        <Bba images={images} courseName="BHM" />
      </>
    </>
  );
};

export default BHM;
