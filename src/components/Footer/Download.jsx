import React from 'react';

const Download = () => {
  const divRef = React.useRef(null);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        divRef.current.classList.add('download');
      } else {
        divRef.current.classList.remove('download');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div
      className="px-8 py-28 bg-slate-700 mt-10 md:mt-20 md:bg-transparent relative"
      ref={divRef}
    >
      <div className="text-center pb-8 md:pb-16 tracking-widest">
        <h1 className="font-bold text-4xl text-white pb-4 md:pb-12">
          Download the app now.
        </h1>
        <p className="text-xl text-white/80">
          Most calendars are designed for teams
        </p>
      </div>
      <div className="flex items-center justify-center gap-4 md:gap-8">
        <button className="px-7 py-4 font-bold text-white bg-[#FA4A0C] rounded-lg cursor-pointer tracking-wider">
          Buy now
        </button>
        <button className="px-11 py-4 font-bold bg-white  md:bg-transparent text-[#FA4A0C] border-[1px] border-[#FA4A0C] md:text-white md:border-white rounded-lg cursor-pointer tracking-wider">
          Try for free
        </button>
      </div>
    </div>
  );
};

export default Download;
