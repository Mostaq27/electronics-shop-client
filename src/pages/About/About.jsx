

import React from "react";
import image from "../../assets/img.jpeg"

const About = () => {
  return (
    <div style={{ backgroundColor: "rgb(92, 92, 92)" }}>
      
        <div className="container mt-5">
          <div className="  pt-5 pb-5 row flex details-teams items-start justify-center text-white">
            <div className="col-md-6 border-end">
              <img src={image} alt="" className=" w-56 img-thumbnail m-2 rounded-xl" />
            </div>
            <div className="text-start items-center">
              <h2 className="">Md Mostaq Muzahid Moin</h2>
              <p className="">
                Student | Programmer | Writer | Content Creator
              </p>
            </div>
          </div>
        </div>
       
    </div>
  );
};

export default About;