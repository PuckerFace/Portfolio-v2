import React from 'react';
import spinner from '/Spinner.svg';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <img src={spinner} alt="" />
    </div>
  );
};

export default Loader;
