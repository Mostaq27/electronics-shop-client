


import { useEffect, useState } from "react";
 



const UpCommingProduct = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch('/upcommingproduct.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data);  
                setCards(data);
            });
    }, []);
    
    return (
        <div style={{ backgroundColor: "rgb(92, 92, 92)" }}>
            <h1 className="text-3xl font-bold text-center p-10">Our Upcomming Products</h1>
            <div className="grid  lg:grid-cols-3 gap-6 px-20">
                 {
                    cards.map(card => <div className="relative flex w-full max-w-[48rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div className="relative  m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
                      <img
                        src= {card.picture}
                        alt="image"
                        className="object-cover w-full h-52"
                      />
                    </div>
                    <div className="p-6">
                       
                      <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                      {card.brand}k
                      </h4>
                      <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                      {card.details}
                      </p>
                      <a className="inline-block" href="#">
                        <button
                          className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-pink-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          type="button"
                        >
                          Learn More
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            aria-hidden="true"
                            className="w-4 h-4"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            ></path>
                          </svg>
                        </button>
                      </a>
                    </div>
                  </div> )
                 }
            </div>

        </div>
    );
};
export default UpCommingProduct;


