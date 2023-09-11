import "../styles/globals.css";
import "../styles/Main.css";
import Image from "next/image";


import img from '../../public/img (1).jpg';
import img2 from '../../public/img (2).jpg';
import img3 from '../../public/img (3).jpg';
import img4 from '../../public/img (4).jpg';
import img5 from '../../public/img (5).jpg';
import img6 from '../../public/img (6).jpg';
import img7 from '../../public/img (7).jpg';
import img8 from '../../public/img (8).jpg';
import img9 from '../../public/img (9).jpg';


import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";


import { useEffect } from 'react';


import Aos from 'aos';
import 'aos/dist/aos.css';

//let me posts the array named data

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "Далеко-далеко за словесными горами в стране гласных, и согласных живут рыбные тексты. Ведущими рукописи букв журчит, его алфавит переписывается текстов свой подпоясал бросил которое курсивных необходимыми имени. Проектах текстами коварный рукописи, имени, большого, коварных несколько всемогущая великий там букв раз она города.",
  },

  {
    id: 2,
    imgSrc: img2,
    destTitle: 'Machu Picchu',
    location: 'Peru',
    grade: 'CULTURAL RELAX',
    fees: '$600',
    description: 'Далеко-далеко за словесными горами в стране гласных, и согласных живут рыбные тексты. Ведущими рукописи букв журчит, его алфавит переписывается текстов свой подпоясал бросил которое курсивных необходимыми имени. Проектах текстами коварный рукописи, имени, большого, коварных несколько всемогущая великий там букв раз она города.',
  },

  {
    id: 3,
    imgSrc: img3,
    destTitle: 'Great Barrier Reef',
    location: 'Australia',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'Далеко-далеко за словесными горами в стране гласных, и согласных живут рыбные тексты. Ведущими рукописи букв журчит, его алфавит переписывается текстов свой подпоясал бросил которое курсивных необходимыми имени. Проектах текстами коварный рукописи, имени, большого, коварных несколько всемогущая великий там букв раз она города.',
  },

  {
    id: 4,
    imgSrc: img4,
    destTitle: 'Cappadocia',
    location: 'Turkey',
    grade: 'CULTURAL RELAX',
    fees: '$800',
    description: 'Далеко-далеко за словесными горами в стране гласных, и согласных живут рыбные тексты. Ведущими рукописи букв журчит, его алфавит переписывается текстов свой подпоясал бросил которое курсивных необходимыми имени. Проектах текстами коварный рукописи, имени, большого, коварных несколько всемогущая великий там букв раз она города.',
  },

  {
    id: 5,
    imgSrc: img5,
    destTitle: 'Guanjuato',
    location: 'Mexico',
    grade: 'CULTURAL RELAX',
    fees: '$1100',
    description: 'Далеко-далеко за словесными горами в стране гласных, и согласных живут рыбные тексты. Ведущими рукописи букв журчит, его алфавит переписывается текстов свой подпоясал бросил которое курсивных необходимыми имени. Проектах текстами коварный рукописи, имени, большого, коварных несколько всемогущая великий там букв раз она города.',
  },


  {
    id: 6,
    imgSrc: img6,
    destTitle: 'Cinque Terre',
    location: 'Italy',
    grade: 'CULTURAL RELAX',
    fees: '$840',
    description: 'Далеко-далеко за словесными горами в стране гласных, и согласных живут рыбные тексты. Ведущими рукописи букв журчит, его алфавит переписывается текстов свой подпоясал бросил которое курсивных необходимыми имени. Проектах текстами коварный рукописи, имени, большого, коварных несколько всемогущая великий там букв раз она города.',
  },


  {
    id: 7,
    imgSrc: img7,
    destTitle: 'Angkor Wat',
    location: 'Combodia',
    grade: 'CULTURAL RELAX',
    fees: '$790',
    description: 'Далеко-далеко за словесными горами в стране гласных, и согласных живут рыбные тексты. Ведущими рукописи букв журчит, его алфавит переписывается текстов свой подпоясал бросил которое курсивных необходимыми имени. Проектах текстами коварный рукописи, имени, большого, коварных несколько всемогущая великий там букв раз она города.',
  },

  
  {
    id: 8,
    imgSrc: img8,
    destTitle: 'Taj Mahal',
    location: 'India',
    grade: 'CULTURAL RELAX',
    fees: '$900',
    description: 'Далеко-далеко за словесными горами в стране гласных, и согласных живут рыбные тексты. Ведущими рукописи букв журчит, его алфавит переписывается текстов свой подпоясал бросил которое курсивных необходимыми имени. Проектах текстами коварный рукописи, имени, большого, коварных несколько всемогущая великий там букв раз она города.',
  },

  {
    id: 9,
    imgSrc: img9,
    destTitle: 'Bali Island',
    location: 'Indonesia',
    grade: 'CULTURAL RELAX',
    fees: '$500',
    description: 'Далеко-далеко за словесными горами в стране гласных, и согласных живут рыбные тексты. Ведущими рукописи букв журчит, его алфавит переписывается текстов свой подпоясал бросил которое курсивных необходимыми имени. Проектах текстами коварный рукописи, имени, большого, коварных несколько всемогущая великий там букв раз она города.',
  },
];

const Main = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="main container section w-full">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title relative text-2xl font-extrabold">
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid justify-center gap-[1.5rem]">
        {Data.map(({ id, destTitle, location, grade, fees, description, imgSrc}) => {
          return (
            <div
              key={id}
              data-aos="fade-up"
              className="singleDestination h-full grid gap-y-[10px] rounded-[10px] items-center  shadow-xl shadow-gray-100 hidden  bg-[#e4d7d7] hover:bg-[#ebe7e7] transition-transform duration-300 ease-in-out"
            >
              <div className="imageDiv h-[180px] w-full ">
                <Image
                  src={imgSrc}
                  width={500}
                  height={500}
                  className="object-cover h-full w-full transition-transform duration-200 ease-in-out hover:transform scale-100"
                  alt={destTitle}
                />
              </div>

              <div className="cardInfo p-4">
                <h4 className="destTitle text-[#180e0e] text-[1.25rem]">
                  {destTitle}
                </h4>
                <span className="continent flex gap-[.5rem]">
                  <HiOutlineLocationMarker className="icon text-[#58585a] text-[18px]" />
                  <span className="name text-[#58585a] font-normal text-[14px]">
                    {location}
                  </span>
                </span>

                <div className="fees flex w-full justify-between p-[1rem] my-4 border-t-[1.5px] border-[#58585a] border-b-[1.5px]">
                  <div className="grade text-[#58585a] max-w-[100px] flex leading-[20px] items-center justify-center">
                    <span>
                      {grade}
                      <small className=" text-center bg-[#3c8dc6] rounded-[1rem] text-[#fff] py-1 px-4 text-[10px]">
                        +1
                      </small>
                    </span>
                  </div>
                  <div className="price text-[2rem] text-[#150f0f]">
                    <h5>{fees}</h5>
                  </div>
                </div>

                <div className="desc text-[13.5px] font-semibold text-[#58585a]">
                  <p>{description}</p>
                </div>

                <button className="btn flex mt-[1rem] text-[#fff] font-bold justify-between gap-[.5rem]">
                  DETAILS
                  <HiOutlineClipboardCheck className="icon text-[#d8d8d8] self-center text-[10px]" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Main;
