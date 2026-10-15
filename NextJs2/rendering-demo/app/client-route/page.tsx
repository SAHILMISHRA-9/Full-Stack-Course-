"use client"
// import { serverSideFunction } from "../utils/server-utils"

// export default function clientRoutePage(){
//     const result=serverSideFunction()
//     return <h1>Client Route- {result}</h1>
// }

// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// export default function cientRoutePage() {
//   const settings = {
//     dots: true,
//   };
//   return (
//     <div className="image-slider-container">
//       <Slider {...settings}>
//         <div>
//           <img src="http://picsum.photos/400/200" />
//         </div>
//         <div>
//           <img src="http://picsum.photos/400/200" />
//         </div>
//         <div>
//           <img src="http://picsum.photos/400/200" />
//         </div>
//         <div>
//           <img src="http://picsum.photos/400/200" />
//         </div>
//       </Slider>
//     </div>
//   );
// }

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useTheme } from '../components/theme-provider';

import { ClientSideFunction } from '../utils/client-utils';

export default function CientRoutePage() {
  const Theme=useTheme()
  const result=ClientSideFunction()
  const settings = {
    dots: true,
  };
  return (
    <>
      <h1 style={{color: Theme.colors.secondary}}>Client router page</h1>
      <p>{result}</p>
    </>
    
  );
}
