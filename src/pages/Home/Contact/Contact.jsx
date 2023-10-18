
import React from "react";
import { Slide, Zoom } from "react-awesome-reveal";
import { FaAngleRight } from "react-icons/fa";

const Contact = () => {
  return (
    <section className=" bg-gray-100 flex flex-col justify-center items-center mt-4">
      <Zoom>
        <h2 className="text-3xl text-orange-400 font-bold my-8 ">
          If any query, please inform us
        </h2>
      </Zoom>
      <div className="w-3/4 md:w-1/2 mt-5">
        <Slide direction={"up"}>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                placeholder="First Name"
                className="rounded px-2 py-4 form-control"
                type="text"
                name="firstName"
              />
              <input
                placeholder="Last Name"
                className="rounded px-2 py-4 form-control"
                type="text"
                name="lastName"
              />
              <input
                placeholder="Email"
                className="rounded px-2 py-4 form-control"
                type="text"
                name="email"
              />
              <input
                placeholder="Phone Number"
                className="rounded px-2 py-4 form-control"
                type="text"
                name="phoneNumber"
              />
            </div>
            <textarea
              placeholder="Your message..."
              className="rounded w-full px-2 py-4 form-control mt-4"
              type="text"
              name="message"
            />
            <div className="text-center mb-8">
              <Zoom>
                <button className="btn btn-outline btn-sm py-2 px-4 mt-4">
                  Send Message <FaAngleRight />
                </button>
              </Zoom>
            </div>
          </form>
        </Slide>
      </div>
    </section>
  );
};

export default Contact;