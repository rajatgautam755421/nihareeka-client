import React from "react";

const Gallery = ({ courseName, images }) => {
  return (
    <>
      <h1 style={{ marginTop: "50px", textAlign: "center", color: "#ec008d" }}>
        {courseName ? courseName : null} Gallery
      </h1>
      <section className="text-gray-600 body-font">
        <div className="container px-5 mt-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            {images
              ? images.map((value) => {
                  return (
                    <>
                      <div className="lg:w-1/3 sm:w-1/2 p-4">
                        <div className="flex relative">
                          <img
                            alt="gallery"
                            className="absolute inset-0 w-full h-full object-cover object-center"
                            src={value.pic}
                            style={{ borderRadius: "5px" }}
                          />
                          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                              {value.title}
                            </h2>
                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                              {value ? value.faculty.toUpperCase() : null}
                            </h1>
                            <p className="leading-relaxed">
                              {value ? value.description.toUpperCase() : null}
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })
              : null}
          </div>
        </div>
      </section>

      {/* Career Details */}
    </>
  );
};

export default Gallery;
