import React, { useEffect, useState } from "react";
import axios from "axios";
import DeleteImageData from "./DeleteImageData";

const GalleryImage = ({ fetch1 }) => {
  const [images, setImages] = useState([]);
  const [render, setRender] = useState(false);
  useEffect(() => {
    const fetchItems = async () => {
      const { data } = await axios.get("http://localhost:4000/api/v1/gallery");
      try {
        console.log(data);
        setImages(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchItems();
  }, [render, fetch1]);

  return (
    <>
      <table className="table main__secction1">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Faculty</th>
            <th scope="col">Image</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
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
    </>
  );
};

export default GalleryImage;
