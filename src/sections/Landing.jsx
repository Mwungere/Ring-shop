import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false)


  return (
    <div className=" h-screen flex justify-center items-center relative bg-gradient-to-r from-black-100 via-black-200 to-black-300">
      <div className="rotating-images z-10 w-[400px] h-[400px] lg:w-[900px] lg:h-[900px]" id="rotate">
        <img src="/assets/rotating-images/image-1.png" alt="Wallet Part 1" className="absolute max-w-[150px] max-h-[150px]  lg:max-w-[280px] lg:max-h-[280px] object-cover circle-image" />
        <img src="/assets/rotating-images/image-2.png" alt="Wallet Part 2" className="absolute max-w-[150px] max-h-[150px]  lg:max-w-[280px] lg:max-h-[280px] object-cover circle-image" />
        <img src="/assets/rotating-images/image-3.png" alt="Wallet Part 3" className="absolute max-w-[150px] max-h-[150px]  lg:max-w-[280px] lg:max-h-[280px] object-cover circle-image" />
        <img src="/assets/rotating-images/image-4.png" alt="Wallet Part 4" className="absolute max-w-[150px] max-h-[150px]  lg:max-w-[280px] lg:max-h-[280px] object-cover circle-image" />
        <img src="/assets/rotating-images/image-5.png" alt="Wallet Part 5" className="absolute max-w-[150px] max-h-[150px]  lg:max-w-[280px] lg:max-h-[280px] object-cover circle-image" />
        <img src="/assets/rotating-images/image-6.png" alt="Wallet Part 6" className="absolute max-w-[150px] max-h-[150px]  lg:max-w-[280px] lg:max-h-[280px] object-cover circle-image" />
      </div>

      <div className={`rotating-images-2 z-30 w-[1000px] h-[1000px] lg:w-[1600px] lg:h-[1600px]`} id="rotate">
        <img src="/assets/rotating-images/image-1.png" alt="Wallet Part 1" className="circle-image-1 absolute max-w-[150px] max-h-[150px] lg:max-w-[280px] lg:max-h-[280px] object-cover " />
        <img src="/assets/rotating-images/image-2.png" alt="Wallet Part 2" className="circle-image-1 absolute max-w-[150px] max-h-[150px] lg:max-w-[280px] lg:max-h-[280px] object-cover" />
        <img src="/assets/rotating-images/image-3.png" alt="Wallet Part 3" className="circle-image-1 absolute max-w-[150px] max-h-[150px] lg:max-w-[280px] lg:max-h-[280px] object-cover" />
        <img src="/assets/rotating-images/image-4.png" alt="Wallet Part 4" className="circle-image-1 absolute max-w-[150px] max-h-[150px] lg:max-w-[280px] lg:max-h-[280px] object-cover" />
        <img src="/assets/rotating-images/image-5.png" alt="Wallet Part 5" className="circle-image-1 absolute max-w-[150px] max-h-[150px] lg:max-w-[280px] lg:max-h-[280px] object-cover" />
        <img src="/assets/rotating-images/image-6.png" alt="Wallet Part 6" className="circle-image-1 absolute max-w-[150px] max-h-[150px] lg:max-w-[280px] lg:max-h-[280px] object-cover" />
        <img src="/assets/rotating-images/image-1.png" alt="Wallet Part 1" className="circle-image-1 absolute max-w-[150px] max-h-[150px] lg:max-w-[280px] lg:max-h-[280px] object-cover" />
        <img src="/assets/rotating-images/image-2.png" alt="Wallet Part 2" className="circle-image-1 absolute max-w-[150px] max-h-[150px] lg:max-w-[280px] lg:max-h-[280px] object-cover" />
        <img src="/assets/rotating-images/image-3.png" alt="Wallet Part 3" className="circle-image-1 absolute max-w-[150px] max-h-[150px] lg:max-w-[280px] lg:max-h-[280px] object-cover" />
        <img src="/assets/rotating-images/image-4.png" alt="Wallet Part 4" className="circle-image-1 absolute max-w-[150px] max-h-[150px] lg:max-w-[280px] lg:max-h-[280px] object-cover" />
        <img src="/assets/rotating-images/image-5.png" alt="Wallet Part 5" className="circle-image-1 absolute max-w-[150px] max-h-[150px] lg:max-w-[280px] lg:max-h-[280px] object-cover" />
        <img src="/assets/rotating-images/image-6.png" alt="Wallet Part 6" className="circle-image-1 absolute max-w-[150px] max-h-[150px] lg:max-w-[280px] lg:max-h-[280px] object-cover" />
      </div>

      <div className="z-40 flex flex-col justify-center items-center">
        <h1 className=" text-white lg:text-4xl">Your Wallet</h1>
        <button
          onClick={() => navigate('/hero')}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="start-button bg-white px-4 py-2 mt-2 rounded-lg">
          Start
        </button>
      </div>
    </div>
  );
};

export default Landing;
