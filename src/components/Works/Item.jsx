import React from 'react';

const Item = ({ title, img, desc, text, isRow = true }) => {
  return (
    <div
      className={`flex justify-between items-center sm:flex-row gap-10 ${
        isRow ? 'flex-col' : 'flex-col-reverse'
      }`}
    >
      {isRow ? (
        <>
          <div className="text-center md:text-left w-1/2 max-w-xl ">
            <h3 className="font-bold text-xl text-[#FA4A0C] pb-5">{title}</h3>
            <h1 className="font-bold text-3xl sm:text-4xl text-gray-900 pb-5 leading-snug">
              {text}
            </h1>
            <p className="text-gray-500">{desc}</p>
          </div>
          <div className="w-full max-w-xs">
            <img src={img} alt="" className="w-full object-cover" />
          </div>
        </>
      ) : (
        <>
          <div className="w-full max-w-xs">
            <img src={img} alt="" className="w-full object-cover" />
          </div>
          <div className="text-center md:text-left w-1/2 max-w-xl ">
            <h3 className="font-bold text-xl text-[#FA4A0C] pb-5">{title}</h3>
            <h1 className="font-bold text-3xl sm:text-4xl text-gray-900 pb-5 leading-snug">
              {text}
            </h1>
            <p className="text-gray-500">{desc}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Item;
