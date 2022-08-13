import React, { useEffect, useState } from "react";
import axios from "axios";
import DeleteImageData from "./DeleteImageData";
import Loader from "../../Loader";
import { ENDPOINT } from "../../GlobalVariables";

const GalleryImage = ({ fetch1 }) => {
  const [images, setImages] = useState([]);
  const [render, setRender] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      const { data } = await axios.get(`${ENDPOINT}/api/v1/gallery`);
      try {
        setLoading(true);
        console.log(data);
        setImages(data);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    };
    fetchItems();
  }, [render, fetch1]);

  return (
    <>
      <div style={{ overflowX: "auto" }}>
        <table className="table main__secction1" style={{ overflowX: "auto" }}>
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Faculty</th>
              <th scope="col">Image</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {loading && <Loader />}
            {images
              ? images.length === 0 && (
                  <h6 style={{ marginTop: "10px" }}>No Gallery Images</h6>
                )
              : null}
            {images.map((value, index) => {
              return (
                <>
                  <DeleteImageData
                    value={value}
                    render={render}
                    setRender={setRender}
                    index={index + 1}
                  />
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default GalleryImage;
