
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { RingLoader } from "react-spinners";


const ProductDetails = () => {
    const [findData, setFindData] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const { photo, brand, name, price, description } = findData;
    const { id } = useParams()
    useEffect(() => {

        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, []);
    useEffect(() => {
        fetch('https://electronics-shop-server.vercel.app/product')
            .then(res => res.json())
            .then(data => {

                const findItem = data.find(product => product._id == id)
                setFindData(findItem)
                setIsLoading(false)
            })
    }, [id])


    const handleAddCard = () => {



        const cartProduct = { photo, brand, name, price }

        fetch('https://electronics-shop-server.vercel.app/cart', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cartProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'product add to cart successfully.!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    // alert("product add to cart very successfully")
                }
                console.log(data)
            })


        console.log(cartProduct)

    }

    return (
        <>
            <Helmet>
                <title>Product Details | Tech Point</title>
            </Helmet>
            <div className=" space-y-20 py-12 bg-base-200">
                <h3 className="text-center text-2xl font-bold">
                    Details For : <span className="text-orange-400">{name}</span>
                </h3>
                {
                     isLoading ? <div className="  justify-center items-center flex py-20">
                     <RingLoader
                         color="hsla(10, 91%, 27%, 1)"
                         cssOverride={{}}
                         loading
                         size={74}
                         speedMultiplier={1}
                     />
                 </div>
                     :
                     <div className=" items-center justify-center flex">

                     <div class="relative flex w-full max-w-[48rem]  rounded-xl bg-white bg-clip-border text-gray-700 shadow-md flex-col md:flex-row">
                         <div class="relative  m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border lg:w-2/5">
                             <img
                                 src={photo}
                                 alt="image"
                                 class="object-cover w-full h-52 md:w-80 h-full"
                             />
                         </div>
                         <div class="p-6">
                             <h6 class="block mb-4 font-sans text-xl antialiased font-bold leading-relaxed tracking-normal text-pink-500 uppercase">
                                 {brand}
                             </h6>
                             <h4 class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                 {name}
                             </h4>
                             <p class="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                                 {description}
                             </p>
                             <a class="inline-block" >
                                 <button onClick={handleAddCard}
                                     class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-pink-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                     type="button"
                                 >
                                     Add to Cart
                                     <svg
                                         xmlns="http://www.w3.org/2000/svg"
                                         fill="none"
                                         viewBox="0 0 24 24"
                                         stroke-width="2"
                                         stroke="currentColor"
                                         aria-hidden="true"
                                         class="w-4 h-4"
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
                     </div>
                 </div>
                }
               


            </div>
        </>
    );
};
export default ProductDetails;