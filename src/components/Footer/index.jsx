import React from 'react';
import Download from './Download';
import logo from '../../assets/logo.svg';
import tw from '../../assets/tw.svg';
import fb from '../../assets/fb.svg';
import ig from '../../assets/ig.svg';

const Footer = () => {
  return (
    <>
      <Download />
      <footer>
        <div className="container mx-auto px-8 py-20 md:py-12">
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
            <img src={logo} alt="" className="hidden md:block" />
            <div className="flex gap-10">
              <img src={tw} alt="" />
              <img src={fb} alt="" />
              <img src={ig} alt="" />
            </div>
            <p className="font-bold text-gray-900">
              Copyright 2020 Bella Abs.com
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
