

import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { default as parts, default as person } from "../../assets/about-img.webp";

const About = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="lg:w-1/2 relative">
            <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
            <img
              src={parts}
              className="w-1/2 absolute right-5 top-1/2 rounded-lg border-8 border-white shadow-2xl"
            />
          </div>
          <div className="lg:w-1/2 space-y-5 p-4">
            <h3 className="text-3xl text-orange-400 font-bold">About Us</h3>
            <h1 className="text-5xl font-bold">
              We are qualified & of experience in this field
            </h1>
            <p className="py-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which do not look even
              slightly believable.
            </p>
            <p className="py-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which do not look even
              slightly believable.
            </p>
            <button className="btn btn-outline btn-sm py-2 px-4 mt-4">
              Get More Info <FaAngleRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;





// import React from "react";
// import image from "../../assets/img.jpeg"

// const About = () => {
//   return (
//     <div style={{ backgroundColor: "rgb(92, 92, 92)" }}>
      
//         <div className="container mt-5">
//           <div className="  pt-5 pb-5 row flex details-teams items-start justify-center text-white">
//             <div className="col-md-6 border-end">
//               <img src={image} alt="" className=" w-56 img-thumbnail m-2 rounded-xl" />
//             </div>
//             <div className="text-start items-center">
//               <h2 className="">Md Mostaq Muzahid Moin</h2>
//               <p className="">
//                 Student | Programmer | Writer | Content Creator
//               </p>
//             </div>
//           </div>
//         </div>
       
//     </div>
//   );
// };

// export default About;