// import { motion } from "framer-motion";
// import React from "react";

// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// // import required modules
// import { Autoplay, Pagination } from "swiper/modules";

// const data = [
//   {
//     id: 3,
//     img: "/images/_DSC2717.jpg",
//   },

//   {
//     id: 5,
//     img: "/images/_DSC3444.jpg",
//   },
//   {
//     id: 6,
//     img: "/images/_DSC3476.jpg",
//   },
//   {
//     id: 7,
//     img: "/images/_DSC3477.jpg",
//   },
// ];

// const Hero = () => {
//   return (
//     <section>
//       <div className="container min-h-screen max-w-6xl overflow-hidden relative mx-auto rounded-[2rem] pt-44 md:pt-32  h-auto">
//         <Swiper
//           pagination={{
//             dynamicBullets: true,
//           }}
//           autoplay
//           modules={[Pagination, Autoplay]}
//           className=""
//         >
//           {data.map((item) => (
//             <SwiperSlide key={item.id}>
//               <Card img={item.img} />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// const Card = ({ img }) => {
//   return (
//     <div className="relative rounded-[2rem] overflow-hidden aspect-video max-w-6xl mx-auto">
//       <img
//         src={img}
//         alt="Dance Performance"
//         className="w-full h-full object-cover"
//       />
//       <div className="absolute inset-0 bg-gradient-to-t from-[#1a1b2e]/80 to-transparent" />
//       <motion.h1
//         initial={{ y: 20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ delay: 0.5 }}
//         className="absolute bottom-10 left-1/2 -translate-x-1/2 text-4xl md:text-6xl text-white font-serif text-center"
//       >
//         DANCE WITH US
//       </motion.h1>
//     </div>
//   );
// };


import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const data = [
  { id: 3, img: "/images/_DSC2717.jpg" },
  { id: 5, img: "/images/_DSC3444.jpg" },
  { id: 6, img: "/images/_DSC3476.jpg" },
  { id: 7, img: "/images/_DSC3477.jpg" },
];

const Hero = () => {
  return (
    <section>
      <div className="container h-auto max-w-6xl overflow-hidden relative mx-auto rounded-[2rem] pt-44  ">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          autoplay
          modules={[Pagination, Autoplay]}
          className=""
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <Card img={item.img} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;

const Card = ({ img }) => {
  Card.propTypes = {
    img: PropTypes.string.isRequired,
  };

  return (
    <div className="relative rounded-[2rem] overflow-hidden aspect-video max-w-6xl mx-auto">
      <img
        src={img}
        alt="Dance Performance"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/80 to-transparent" />
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-4xl md:text-6xl text-[#64ffda] font-serif text-center font-bold text-shadow-glow"
      >
  
      </motion.h1>
    </div>
  );
};

import PropTypes from 'prop-types';

