import axios from "axios";
import React, { useEffect, useState } from "react";
import Bba from "../BBA/Bba";

const CSIT = () => {
  const [images, setImages] = useState([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    const fetchData = async () => {
      const { data } = await axios.get(
        "https://nihareeka-college.herokuapp.com/api/v1/gallery/faculty/csit"
      );
      try {
        console.log(data);
        setImages(data);
        setloading(false);
      } catch (error) {
        console.log(error.message);
        setloading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <>
        <Bba images={images} courseName="Bsc.CSIT" loading={loading} />
      </>
    </>
  );
};

export default CSIT;
