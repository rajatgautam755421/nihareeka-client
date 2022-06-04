import React from "react";

const FacultyData = ({ image, name, desc, post }) => {
  return (
    <>
      <div className="p-4 lg:w-1/4 md:w-1/2" style={{ margin: "0px auto" }}>
        <div className="h-full flex flex-col items-center text-center">
          <img
            alt="Image not Found"
            className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4 faculty__members__image__main"
            src={image}
          />
          <div className="w-full">
            <h3 className="text-gray-900 mb-3">{name}</h3>
            <h2 className="title-font font-medium text-lg text-pink-600">
              {post}
            </h2>
            <p className="mb-4">{desc}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FacultyData;
