import { GrLocation } from 'react-icons/gr';
import { HiFilter } from 'react-icons/hi';
import { FiFacebook } from 'react-icons/fi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { SiTripadvisor } from 'react-icons/si';
import { BsListTask } from 'react-icons/bs';
import { TbApps } from 'react-icons/tb';

import '../styles/Home.css';
import '../styles/globals.css';


import Image from "next/image";


import { useEffect } from 'react';


import Aos from 'aos';
import 'aos/dist/aos.css';


const Home = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="home w-full relative flex items-center justify-center m-auto">
    <div className="overlay absolute h-full w-full top-0 bottom-0 z-1 bg-[#23639e] mix-blend-hard-light"></div>
    <Image
      src="/ezgif.com-video-to-gif.gif"
      width={500}
      height={500}
      className="absolute h-full w-full top-0 bottom-0 object-cover"
    />
  
    <div className="homeContent container w-full h-max p-[8rem] pr-1.5 pb-[2rem] flex gap-y-[3rem] flex-col items-stretch justify-center z-[100] m-auto text-[#fff]">
      <div className="textDiv  py-[2rem] p-0 hidden:px-4">
        <span data-aos="fade-up" className="smallTex text-[13px] uppercase">
          Our Packages
        </span>
        <div data-aos="fade-up" className="homeTitle relative text-[1.8rem] font-black">
          Search your Holiday
        </div>
      </div>
  
      <div data-aos="fade-up" className="cardDiv grid relative px-[1rem] py-[2rem] bg-white rounded-[10px] gap-[1rem]">
        <div className="destinationInput">
          <label htmlFor="city" className="block text-gray-600 pb-[10px] text-[14px] font-medium">
            Search your destination:
          </label>
          <div className="input flex h-10 py-0 px-[1rem] bg-[#fbf2f2] rounded-[3rem]">
            <input
              type="text"
              placeholder="Enter name here..."
              className="bg-none border-none outline-none w-full text-[13px] font-medium placeholder-text-13rem text-black p-1 rounded-sm"
            />
            <GrLocation className="icon text-[18px] text-blue-500!important ml-[10px]" />
          </div>
        </div>
  
        <div className="dateInput">
          <label htmlFor="date" className="block text-gray-600 pb-[10px] text-[14px] font-medium">
            Select your date:
          </label>
          <div className="input flex h-10 py-0 px-[1rem] bg-[#fbf2f2] rounded-[3rem]">
            <input
              type="date"
              className="text-gray-400 bg-none border-none outline-none w-full text-[13px] font-medium placeholder-text-13rem p-1 rounded-sm"
            />
          </div>
        </div>
  
        <div className="priceInput">
          <div className="label_total flex justify-between items-center">
            <label htmlFor="price" className="block text-gray-600 pb-[10px] text-[14px] font-medium">
              Max price:
            </label>
            <h3 className="total text-gray-600 text-[18px] pb-[10px]">$5000</h3>
          </div>
          <div className="input flex h-10 py-0 px-[1rem] bg-[#fbf2f2] rounded-[3rem]">
            <input type="range" max="5000" min="1000" className="bg-none border-none outline-none w-full text-[13px] font-medium placeholder-text-13rem p-1" />
          </div>
        </div>
  
        <div className="searchOptions flex absolute bg-gradient-to-r from-blue-500 to-indigo-600 bg-[#123c5a] hover:bg-blue-500 w-max bottom-[-1.6rem] gap-x-[.8rem] p-1 px-5 rounded-[3rem] left-[50%] transform -translate-x-1/2 justify-center cursor-pointer">
          <HiFilter className="icon text-[18px]" />
          <span className="text-[13px]">MORE FILTERS</span>
        </div>
      </div>
  
      <div data-aos="fade-up" className="homeFooterIcons flex flex-row w-full justify-between">
        <div className="rightIcons flex flex-row">
          <FiFacebook className="icon-1 text-[20px] m-0 mx-1 text-[#fff] hover:text-blue-500 font-semibold" />
          <AiOutlineInstagram className="icon-2 text-[20px] m-0 mx-1 text-[#fff] hover:text-blue-500 font-semibold" />
          <SiTripadvisor className="icon-3 text-[20px] m-0 mx-1 text-[#fff] hover:text-blue-500 font-semibold" />
        </div>
  
        <div className="leftIcons flex flex-row">
          <BsListTask className="icon-3 text-[20px] m-0 mx-1 text-[#fff] hover:text-blue-500 font-semibold" />
          <TbApps className="icon-3 text-[20px] m-0 mx-1 text-[#fff] hover:text-blue-500 font-semibold" />
        </div>
      </div>
    </div>
  </section>
    )
}

export default Home