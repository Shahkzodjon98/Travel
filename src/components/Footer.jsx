import '../styles/globals.css';
import '../styles/Footer.css';



import { FiSend } from 'react-icons/fi';


import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiOutlineTwitter } from 'react-icons/ai';
import {AiFillInstagram} from 'react-icons/ai';
import { FaTripadvisor } from 'react-icons/fa';
import { AiFillYoutube } from 'react-icons/ai';
import { FiChevronRight } from 'react-icons/fi';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';


import { useEffect, useState } from 'react';


import Aos from 'aos';
import 'aos/dist/aos.css';



const Footer = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);



  const [showArrowUp, setShowArrowUp] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowArrowUp(true);
    } else {
      setShowArrowUp(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <section  className='footer w-full relative py-8 flex items-center justify-center m-auto'>
      <div className='secContent absolute h-full w-full'>

       <video muted autoPlay loop className='object-cover absolute h-full w-full bg-gradient-to-b from-transparent via-transparent to-[rgba(10, 87, 107, 0.307)]'>
         <source src="/video (2).mp4" type="video/mp4" />
      </video>

      </div>

      <div className="container w-full h-max p-8 flex justify-center items-center flex-col m-auto gap-y-[2rem] z-[100]">
        <div className='secContent flex justify-between flex-col gap-[1rem]'>
          <div data-aos="fade-up" className=' p-4 '>
            <small className=' text-[14px] font-normal text-[#fff]'>KEEP IN TOUCH</small>
            <h2 className=' text-[2.0rem] font-extrabold text-[#fff]'>Travel with us</h2>
          </div>


          <div className="footerCard flex w-full gap-[1rem] flex-col">
          <input  data-aos="fade-up" type="text" placeholder="Enter Email Address" class="w-full px-6 py-2 rounded-full outline-none bg-transparent border-2 border-white placeholder-white placeholder-opacity-150 text-white"/>
            <button  data-aos="fade-up" className='btn flex w-full justify-center text-white font-semibold gap-[.5rem]' type='submit'>SEND<FiSend className='text-[18px]'/></button>
          </div>
        </div>


        <div className="footerLinks relative flex w-full rounded-[1rem] gap-[2rem] p-4 pb-16 bg-[#f5f1f1] flex-col justify-center items-start hidden">
          <div className='footerLinks flex basis-[50%] justify-center items-start flex-col gap-y-[.5rem]'>
            <div className="logoDiv">
              <a href="#" className=' flex text-black font-semibold	'> <MdOutlineTravelExplore className='text-[25px] mr-[10px] text-[#2483acbb]'/> Travel.</a>
            </div>

            <div  data-aos="fade-up" className="footerLinks text-[13px] text-[#5b5864]">
              Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Большой рукопись, наш переписывается семантика lorem взгляд всемогущая текстов страна пустился жизни за составитель жаренные о! Толку щеке курсивных, она за гор пустился продолжил все маленький, силуэт они даже дорогу использовало великий заголовок власти на берегу свой запятой, ему большого решила. 
            </div>

            <div  data-aos="fade-up" className="flex gap-x-[.5rem]">
                <AiOutlineTwitter className=' text-black text-[20px] hover:text-[#2483acbb]'/>
                <AiFillYoutube className='text-black text-[20px] hover:text-[#2483acbb]'/>
                <AiFillInstagram className='text-black text-[20px] hover:text-[#2483acbb]'/>
                <FaTripadvisor className='text-black text-[20px] hover:text-[#2483acbb]'/>
            </div>
          </div>


          <div  className="footerLinks grid grid-cols-2 basis-[50%] w-full gap-[1rem] justify-between">
        {/* Group one  */}
            <div  data-aos="fade-up" data-aos-duration="3000"className="linkGroup">
              <span className='block font-semibold text-black mb-[.5rem]'>
                OUR AGENCY
              </span>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Services
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Insurance
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Agency
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Tourism
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Payment  
              </li>
            </div>


        {/* Group two  */}


            <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span className='block font-semibold text-black mb-[.5rem]'>
                PORTNERS
              </span>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Bookings
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Rentcars
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                HostelWorld
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Trivago
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                TripAdvisor  
              </li>
            </div>
          </div>
        {/* Group three  */}
          <div  data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
              <span className='block font-semibold text-black mb-[.5rem]'>
                LAST MINUTE
              </span>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                London
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Colifornia
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Indonesia
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Europe
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Oceania  
              </li>
            </div>

            <div className='flex flex-col absolute bottom-0  left-0 right-0 bg-[#2483acbb] py-3 px-8 rounded-b-2xl'>
            <small className='text-[10px] text-white'>BEST TRAVEL WEBSITE THEME</small>
            <small className='text-[10px] text-white'>COPYRIGHTS RESERVED - Shakhzod_5544 2023</small>

       
      {/* Conditionally render the arrow-up button */}
      {showArrowUp && (
        <div
          className="w-12 h-12 border border-black/100 rounded-full flex-center cursor-pointer absolute right-1 bottom-16 xl:bottom-8 xl:-right-3 bg-[#2483acbb] transition-200 hover:border-white hover:bg-white group desktop-top"
          data-v-3cb8761c=""
          onClick={scrollToTop}
        >
          <BsFillArrowUpCircleFill className="flex justify-center items-center  text-[48px]" />
        </div>
      )}


            </div>
        </div>
      </div>
    </section>
  )
}

export default Footer

