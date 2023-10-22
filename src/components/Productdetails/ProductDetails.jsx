 
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ProductDetails = () => {
    const [findData, setFindData] = useState({})
    const { photo, brand, name, price,description } = findData;
    const { id } = useParams()
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => {

                const findItem = data.find(product => product._id == id)
                setFindData(findItem)

            })
    }, [id])
   

    const handleAddCard = () => {
    

       
        const cartProduct = {photo,brand,name,price}
     
        fetch('http://localhost:5000/cart',{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(cartProduct)
        })
        .then(res=>res.json())
        .then(data=> {
            if(data.insertedId){
                alert("product add to cart very successfully")
            }
            console.log(data)
        })
     

     console.log(cartProduct)

    }

    return (
        <div className="flex h-screen items-center justify-center p-10 bg-base-200">
            <div class="relative flex flex-col text-gray-700 bg-white shadow-md w-96 h-auto rounded-xl bg-clip-border">
                <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-72 rounded-xl bg-clip-border">
                    <img
                        src={photo}
                        class="object-cover w-full h-60"
                    />
                </div>
                <div class="p-6">
                    <div class="flex items-center justify-between mb-2">
                        <p class="block font-sans text-lg antialiased font-medium leading-relaxed text-blue-gray-900">
                            {name}
                        </p>
                        <p class="block font-sans text-lg antialiased font-medium leading-relaxed text-blue-gray-900">
                            ${price}
                        </p>
                    </div>
                    <p class="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                        {description}
                    </p>
                </div>
                <div class="p-6 pt-0">
                    <button onClick={handleAddCard}
                        class="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};
export default ProductDetails;