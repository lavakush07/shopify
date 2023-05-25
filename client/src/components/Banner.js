import { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    "https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg",
    "https://amazonproone.vercel.app/static/media/img5.aa945e25375bfdee385f.jpg",
    "https://amazonproone.vercel.app/static/media/img3.c80809bb40bee5c34372.jpg",
    "https://amazonproone.vercel.app/static/media/img1.efb3d39101f7ef77d616.jpg",
  ];
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
  };
  console.log(currentSlide);
  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="w-screen h-[650px] relative">
        <div
          style={{ transform: `translate(-${currentSlide * 100}vw)` }}
          className="flex w-[400vw] h-full"
        >
          <img className="w-screen h-full object-cover" src={data[0]} alt="" />
          <img
            loading="priority"
            className="w-screen h-full object-cover"
            src={data[1]}
            alt=""
          />
          <img className="w-screen h-full object-cover" src={data[2]} alt="" />
          <img className="w-screen h-full object-cover" src={data[3]} alt="" />
        </div>
        <div className="absolute left-0 right-0 mx-auto flex w-fit gap-8 bottom-44">
          <div
            onClick={prevSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-700 duration-300 rounded-md"
          >
            <AiOutlineLeft />
          </div>
          <div
            onClick={nextSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-700 duration-300 rounded-md"
          >
            <AiOutlineRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
