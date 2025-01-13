import { Leva } from 'leva';
import { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { ArrowLeft, ChevronLeft, Edit, Ellipsis, ExternalLink, Pencil } from 'lucide-react';
import { PerspectiveCamera } from '@react-three/drei';

import CanvasLoader from '../components/Loading.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import { calculateSizes, items } from '../constants/index.js';
import { ModelOne } from '../components/ModelOne.jsx';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, Virtual } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useNavigate } from 'react-router-dom';

const RotatingModel = ({ scale, position, rotation }) => {
  const modelRef = useRef();
  const [isHovered, setIsHovered] = useState(false);

  useFrame(() => {
    if (!isHovered) {
      modelRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group
      ref={modelRef}
      scale={scale}
      position={position}
      rotation={rotation}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}>
      <ModelOne />
    </group>
  );
};

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const navigate = useNavigate();
  const [isEn, setIsEn] = useState(true);
  // const [activeItem, setActiveItem] = useState(null); // Track the selected item
  // const swiper = useSwiper(); // Access Swiper instance

  // const handleItemClick = (item) => {
  //   setActiveItem(item); // Set the active item for editing
  //   swiper.slideTo(1); // Navigate to the editing slide
  // };

  const [swiperRef, setSwiperRef] = useState(null);

  

  const slideTo = (index) => {
    swiperRef.slideTo(index, 200);
  };
  return (
    <section
      className="min-h-screen w-full flex relative justify-center items-center bg-gradient-to-r from-black-200 via-zinc-800 to-zinc-700"
      id="home">
      <div className="w-full h-screen flex justify-center items-center overflow-auto">
        <Canvas className="max-h-[600px] max-w-[800px]">
          <Suspense fallback={<CanvasLoader />}>
            <Leva hidden />
            <PerspectiveCamera makeDefault position={[0, 0, 10]} />

            <HeroCamera isMobile={isMobile}>
              <RotatingModel scale={5} position={[-1, -4, 0]} rotation={[0.1, -Math.PI, 0]} />
            </HeroCamera>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="min-w-[500px] max-w-[500px] h-[90%] bg-white rounded-md mr-2 relative">
        <Swiper
          onSwiper={setSwiperRef}
          virtual
          modules={[Virtual, Navigation, Pagination]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          className="mySwiper">
          <SwiperSlide virtualIndex={0}>
            <div className=" w-full p-2 flex justify-end">
              <Ellipsis onClick={() => slideTo(1)} className=" size-6 cursor-pointer swiper-button-next top-8 text-black-300" />
            </div>

            <div className=" w-full flex flex-col items-center mt-10">
              <h1 className=" font-generalsans text-3xl">Your Wallet</h1>
              <p className=" text-gray-500">44.90 &euro;</p>
            </div>

            <div className=" mt-[80px] flex flex-col gap-5 px-3 mb-60">
              {items.map(({ title, subtitle, image, price, slide }, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center px-2 hover:border hover:border-gray-200 py-1 rounded-md transition-all duration-100 my-2 group hover:cursor-pointer">
                  <div className="flex items-center gap-4">
                    <img src={image} alt={title} className="h-[100px] w-[100px] rounded-md" />
                    <div>
                      <h2 className="text-sm font-bold">{title}</h2>
                      <p className="text-gray-500">{subtitle}</p>
                      <p className="text-sm text-gray-400">{price}</p>
                    </div>
                  </div>
                  <div>
                    <Pencil className=" size-4 text-red-500 group-hover:-translate-x-4 transition-all duration-200" />
                  </div>
                </div>
              ))}
            </div>

            <div className="px-2 flex justify-center items-center">
              <button className="mx-auto bg-black-300 text-white text-sm font-semibold w-56 h-10 rounded-md mb-20">
                Add to Cart
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide virtualIndex={1} className=" flex flex-col justify-center items-center p-4">
            <ChevronLeft
              onClick={() => slideTo(0)}
              className="cursor-pointer self-start m-5 size-6 text-black-300 top-1"
            />
            <h2 className=" font-medium font-sans text-3xl text-gray-700 mt-10">{isEn ? 'menu' : 'Menü '}</h2>
            <hr className=" w-full mt-20 bg-gray-900" />

            <div className=" w-full flex flex-col justify-center items-center">
              <div className=" w-full border-b border-gray-300 flex justify-between py-10">
                <p className=" font-medium text-base text-gray-700">{isEn ? 'language' : 'Sprache'}</p>
                <div className="flex gap-2">
                  <p
                    onClick={() => setIsEn(false)}
                    className={`${isEn ? '' : 'border-b-2 border-gray-700'} font-medium text-gray-700 cursor-pointer transition-all duration-200 ease-in-out`}>
                    DE
                  </p>
                  <p
                    onClick={() => setIsEn(true)}
                    className={`${isEn ? 'border-b-2 border-gray-700' : ''} font-medium text-gray-700 cursor-pointer transition-all duration-200 ease-in`}>
                    EN
                  </p>
                </div>
              </div>

              <div className=" w-full border-b border-gray-300 flex justify-between py-10">
                <p className=" font-medium text-base text-gray-700">{isEn ? 'Imprint' : 'Impressum'}</p>
                <div className="flex gap-2">
                  <ExternalLink onClick={() => navigate('/hero')} className="text-gray-600 cursor-pointer" />
                </div>
              </div>

              <div className=" w-full border-b border-gray-300 flex justify-between py-10">
                <p className=" font-medium text-base text-gray-700">{isEn ? 'T&C' : 'AGB'}</p>
                <div className="flex gap-2">
                  <ExternalLink onClick={() => navigate('/hero')} className="text-gray-600 cursor-pointer" />
                </div>
              </div>

              <div className=" w-full border-b border-gray-300 flex justify-between py-10">
                <p className=" font-medium text-base text-gray-700">{isEn ? 'Privacy policy' : 'Datenschutz'}</p>
                <div className="flex gap-2">
                  <ExternalLink onClick={() => navigate('/hero')} className="text-gray-600 cursor-pointer" />
                </div>
              </div>
            </div>

            <div className=" w-full mt-[300px] flex justify-center items-center">
              <p className=" text-sm text-center font-medium text-gray-400">
                Designed + Developed by soehne.co <br /> © 2024, Lockcard.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
