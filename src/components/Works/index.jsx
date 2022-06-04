import React from 'react';
import Item from './Item';

import phone1 from '../../assets/images/phone1.png';
import phone2 from '../../assets/images/Phone2.png';
import phone3 from '../../assets/images/Phone3.png';

const data = [
  {
    title: 'Create a new project',
    img: phone1,
    desc: 'An account is created with your email and a desired password',
    text: 'Create/login to an existing account to get started',
  },
  {
    title: 'Explore varieties',
    img: phone2,
    desc: 'Shop for your favorite meals or drinks and enjoy while doing it.',
    text: 'Shop for your favorites meal as e dey hot.',
  },
  {
    title: 'Checkout',
    img: phone3,
    desc: 'When you done check out and get it delivered.',
    text: 'When you done check out and get it delivered with ease.',
  },
];

const Works = () => {
  return (
    <div className="w-full mx-auto max-w-5xl">
      <div className="flex gap-20 flex-col">
        {data.map((item, index) => {
          const isRow = index % 2 === 0;
          return <Item key={index} {...item} isRow={isRow} />;
        })}
      </div>
    </div>
  );
};

export default Works;
