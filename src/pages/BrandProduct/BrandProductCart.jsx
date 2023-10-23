import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";


const BrandProductCart = ({ product }) => {

    const { photo, name, brand, type, price, rating } = product || {};

    const isRating = {
        size: 25,
        count: 5,
        edit: false,
        isHalf: true,
        value: (rating),
        color: "blue",
        activeColor: "red",
       
    };
    // console.log(product)
    return (
        <>

            <div className="relative flex  w-auto max-w-[48rem]  rounded-xl bg-white bg-clip-border text-gray-700 shadow-md flex-row">
                <div className="relative w-2/4 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
                    <img
                        src={photo}
                        alt="image"
                        className="object-cover w-80 h-full"
                    />
                </div>
                <div className="p-6">
                    <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
                        {name}
                    </h6>
                    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        Brand: {brand}
                    </h4>
                    <p className="block mb-2 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                        Category: {type}
                    </p>
                    <p className="block mb-2 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                        Price: {price}$
                    </p>
                    <div className="flex items-center"><p>Rating:</p> <p><ReactStars {...isRating} /></p> 

                    </div>
                    <div className="flex flex-col">
                        <a className="inline-block">
                            <Link to={`/productdetails/${product._id}`}>
                                <button
                                    className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-pink-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="button"
                                >
                                    Details
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
                            </Link>

                        </a>
                        <a className="inline-block" >
                            <Link to={`/updateproduct/${product._id}`}>
                                <button
                                    className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-pink-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="button"
                                >
                                    Update
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
                            </Link>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};
export default BrandProductCart;
