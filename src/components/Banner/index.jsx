import React from 'react';

import phone from '../../assets/images/Phone.png';

const Banner = () => {
  const bannerRef = React.useRef(null);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        bannerRef.current.classList.add('banner');
      } else {
        bannerRef.current.classList.remove('banner');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="relative text-center pt-12" ref={bannerRef}>
      <div className="z-10">
        <p className="font-bold text-xl text-gray-600 md:text-white">
          Food app
        </p>
        <h1 className="font-bold text-4xl md:text-6xl md:max-w-4xl md:leading-normal mx-auto text-[#252B42] py-4 md:text-white">
          Why stay hungry when you can order form Bella Onojie
        </h1>
        <p className="text-2xl text-gray-600 mb-10 px-6 md:text-white/80">
          Download the bella onoje’s food app now on{' '}
        </p>
        <div className="flex flex-col mx-auto md:flex-row gap-4 w-[236px] md:w-full justify-center items-center">
          <button className="px-12 py-4 font-bold text-white bg-[#FA4A0C] rounded-full cursor-pointer tracking-wider">
            Playstore
          </button>
          <button className="px-12 py-4 font-bold bg-white  md:bg-transparent text-[#FA4A0C] border-[1px] border-[#FA4A0C] md:text-white md:border-white rounded-full cursor-pointer tracking-wider">
            App Store
          </button>
        </div>
        <div className="max-w-[640px] mx-auto pb-10 md:pb-20">
          <img src={phone} alt="" className=" w-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
