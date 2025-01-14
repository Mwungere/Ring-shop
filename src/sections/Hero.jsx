import { Leva } from 'leva';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { ArrowLeft, Check, ChevronLeft, Cross, Edit, Ellipsis, ExternalLink, Info, Menu, Pencil, X } from 'lucide-react';
import { PerspectiveCamera, SpotLight } from '@react-three/drei';

import CanvasLoader from '../components/Loading.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import { calculateSizes, items } from '../constants/index.js';
import { ModelOne } from '../components/ModelOne.jsx';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, Virtual } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useNavigate } from 'react-router-dom';

const RotatingModel = ({ scale, position, rotation, activeRing, activeBox }) => {
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
      <ModelOne activeRing={activeRing} activeBox={activeBox} />
    </group>
  );
};



const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const navigate = useNavigate();
  const [isEn, setIsEn] = useState(true);
  const [activeRing, setActiveRing] = useState(0);
  const [activeBox, setActiveBox] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);


  const [scale, setScale] = useState(3.5);

  useEffect(() => {
    const updateScale = () => {
      if (window.matchMedia('(max-width: 767px)').matches) {
        setScale(3.5);
      } else if (window.matchMedia('(min-width: 768px) and (max-width: 1023px)').matches) {
        setScale(5);
      } else {
        setScale(5); 
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  const handleSetActiveRing = () => {
    console.log('active ring', activeRing);
    slideTo(0);
  };

  const handleSetActiveBox = () => {
    console.log('active box', activeBox);
    slideTo(0);
  };

  const [swiperRef, setSwiperRef] = useState(null);

  const slideTo = (index) => {
    swiperRef.slideTo(index, 300);
  };
  return (
    <section
      className={`min-h-screen w-full flex relative justify-center items-center ${menuOpen? 'bg-white lg:bg-gradient-to-r from-black-200 via-zinc-800 to-zinc-700': 'bg-gradient-to-r from-black-200 via-zinc-800 to-zinc-700'}`}
      id="home">
        {!menuOpen && <div onClick={() => setMenuOpen(true)} className=' absolute top-2 left-6 flex cursor-pointer lg:hidden z-50'><Menu className=' text-white' /></div>}
        {menuOpen && <div onClick={() => setMenuOpen(false)} className=' absolute top-2 left-6 flex cursor-pointer lg:hidden z-50'><X className=' text-black' /></div>}

      <div className="w-full h-screen flex justify-center items-center overflow-auto">
        <Canvas className="max-h-[600px] max-w-[800px] flex justify-center items-center">
          <Suspense fallback={<CanvasLoader />}>
            <Leva hidden />
            <PerspectiveCamera makeDefault position={[10, 10, 10]} />
            {/* <Light /> */}
            <HeroCamera isMobile={isMobile}>
              <RotatingModel
                activeRing={activeRing}
                activeBox={activeBox}
                scale={scale}
                position={[0, -2, 0]}
                rotation={[0.1, -Math.PI, 0]}
              />
            </HeroCamera>

            <ambientLight intensity={1} />
            <directionalLight position={[0, 0, 10]} intensity={1} color={0xffffff} />
          </Suspense>
        </Canvas>
      </div>

      <div className={` ${!menuOpen ? ' hidden lg:block transition-all duration-200' : ''} z-40 min-w-full lg:min-w-[500px] max-w-[500px] h-[80%] bg-white rounded-md mr-2 relative`}>
        <Swiper
          onSwiper={setSwiperRef}
          virtual
          modules={[Virtual, Navigation, Pagination]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',

          }}
          className=''
          >
          <SwiperSlide virtualIndex={0}>
            <div className=" w-full p-2 flex justify-end">
              <Ellipsis
                onClick={() => slideTo(1)}
                className=" size-6 cursor-pointer swiper-button-next top-8 text-black-300"
              />
            </div>

            <div className=" w-full flex flex-col items-center mt-10">
              <h1 className=" font-generalsans text-3xl">Your Wallet</h1>
              <p className=" text-gray-500">${(parseFloat(items.rings[activeRing].price) + parseFloat(items.boxes[activeBox].price)).toFixed(2)}</p>
            </div>

            <div className=" mt-[80px] flex flex-col gap-5 px-3 mb-32 lg:mb-60">
              <div
                onClick={() => slideTo(2)}
                className="flex justify-between items-center px-2 hover:border hover:border-gray-200 py-1 rounded-md transition-all duration-100 my-2 group hover:cursor-pointer">
                <div className="flex items-center gap-4">
                  <img
                    src={items.rings[activeRing].image}
                    alt={items.rings[activeRing].title}
                    className="h-[100px] w-[100px] rounded-md bg-gray-200"
                  />
                  <div>
                    <h2 className="text-sm font-bold">{items.rings[activeRing].title}</h2>
                    <p className="text-gray-500">{items.rings[activeRing].subtitle}</p>
                    <p className="text-sm text-gray-400">${items.rings[activeRing].price}</p>
                  </div>
                </div>
                <div>
                  <Pencil className=" size-4 text-red-500 group-hover:-translate-x-4 transition-all duration-200" />
                </div>
              </div>

              <div
                onClick={() => slideTo(3)}
                className="flex justify-between items-center px-2 hover:border hover:border-gray-200 py-1 rounded-md transition-all duration-100 my-2 group hover:cursor-pointer">
                <div className="flex items-center gap-4">
                  <img
                    src={items.boxes[activeBox].image}
                    alt={items.boxes[activeBox].title}
                    className="h-[100px] w-[100px] rounded-md bg-gray-200"
                  />
                  <div>
                    <h2 className="text-sm font-bold">{items.boxes[activeBox].title}</h2>
                    <p className="text-gray-500">{items.boxes[activeBox].subtitle}</p>
                    <p className="text-sm text-gray-400">${items.boxes[activeBox].price}</p>
                  </div>
                </div>
                <div>
                  <Pencil className=" size-4 text-red-500 group-hover:-translate-x-4 transition-all duration-200" />
                </div>
              </div>
            </div>

            <div className="px-2 flex justify-center items-center">
              <button className="mx-auto bg-black-300 text-white text-sm font-semibold w-56 h-10 rounded-md mb-20">
                Add to Cart
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide virtualIndex={1} className="relative flex flex-col justify-center items-center px-4 py-2 lg:p-4">
            <ChevronLeft
              onClick={() => slideTo(0)}
              className="cursor-pointer self-end lg:self-start lg:m-5 size-6 text-black-300 top-1"
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

            <div className=" w-full mt-[350px] md:mt-[380px] lg:mt-[250px] flex justify-center items-center">
              <p className=" absolute bottom-[280px] lg:bottom-20 lg:relative text-sm text-center font-medium text-gray-400">
                Designed + Developed by soehne.co <br /> © 2024, Lockcard.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide virtualIndex={2} className=" flex flex-col justify-center items-center p-4">
            <h2 className=" font-medium text-xl">Ring</h2>

            <div className=" w-full mt-[30px] md:mt-[80px] flex flex-col mb-20 gap-2">
              {items.rings.map((ring) => (
                <div
                  onClick={() => setActiveRing(ring.id)}
                  key={ring.id}
                  className={` ${activeRing == ring.id ? 'border border-black transition-all duration-100' : ''} w-full flex justify-between items-start p-2 hover:ring hover:ring-gray-100 rounded-md cursor-pointer transition-all duration-200 `}>
                  <div className="flex items-center gap-4">
                    <img src={ring.image} alt={ring.title} className="h-[90px] md:h-[100px] w-[100px] rounded-md bg-gray-200" />
                    <div>
                      <h2 className="text-sm font-bold">{ring.title}</h2>
                      <p className="text-sm text-gray-400">${ring.price}</p>
                    </div>
                  </div>

                  <div>
                    {activeRing == ring.id ? <Info className=" rounded-full text-gray-500 m-2 self-start" /> : ''}
                  </div>
                </div>
              ))}
            </div>

            <div className=" w-full flex justify-center items-center md:mt-24 ">
              <button
                onClick={() => handleSetActiveRing()}
                className="mx-auto bg-black-300 hover:bg-black transition-colors duration-300 text-white text-sm font-semibold w-full h-10 rounded-md">
                <Check className=" mx-auto size-7" />
              </button>
            </div>
          </SwiperSlide>

          <SwiperSlide virtualIndex={3} className=" flex flex-col justify-center items-center p-4">
            <h2 className=" font-medium text-xl">Box</h2>

            <div className=" w-full mt-[80px] flex flex-col mb-20 gap-2">
              {items.boxes.map((box) => (
                <div
                  onClick={() => setActiveBox(box.id)}
                  key={box.id}
                  className={` ${activeBox == box.id ? 'border border-black transition-all duration-100' : ''} w-full flex justify-between items-start p-2 hover:ring hover:ring-gray-100 rounded-md cursor-pointer transition-all duration-200 `}>
                  <div className="flex items-center gap-4">
                    <img src={box.image} alt={box.title} className="h-[100px] w-[100px] rounded-md" />
                    <div>
                      <h2 className="text-sm font-bold">{box.title}</h2>
                      <p className="text-sm text-gray-400">${box.price}</p>
                    </div>
                  </div>

                  <div>
                    {activeBox == box.id ? <Info className=" rounded-full text-gray-500 m-2 self-start" /> : ''}
                  </div>
                </div>
              ))}
            </div>

            <div className=" w-full flex justify-center items-center mt-[170px] lg:mt-[300px] ">
              <button
                onClick={() => handleSetActiveBox()}
                className="mx-auto bg-black-300 hover:bg-black transition-colors duration-300 text-white text-sm font-semibold w-full h-10 rounded-md">
                <Check className=" mx-auto size-7" />
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
