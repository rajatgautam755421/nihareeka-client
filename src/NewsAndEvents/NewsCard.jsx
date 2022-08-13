import React from "react";

const NewsCard = ({ date, title, image, description }) => {
  return (
    <>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden faculty__members__image__main__news">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={image}
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">
              {date.slice(0, 10)}
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              {title}{" "}
            </h1>
            <p className="leading-relaxed mb-3">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
