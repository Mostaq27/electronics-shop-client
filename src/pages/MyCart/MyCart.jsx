import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";


const MyCart = () => {
    const cartLoaded = useLoaderData();
    const [carts, setCarts] = useState(cartLoaded);

    const handleDelete = id => {
        // make sure cart is confirmed to delete 
        
        fetch(`https://electronics-shop-server.vercel.app/cart/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    console.log('deleted successfully');
                    // remove the cart from the ui
                    const remainingCarts = carts.filter(cart => cart._id !== id);
                    setCarts(remainingCarts);
                }
            })
        }

    return (
        <>
            <Helmet>
                <title>Mycart | Tech Point</title>
            </Helmet>
            <div className="p-10">
                <h3 className="text-center text-3xl font-bold">My Carts : <span className=" text-orange-500"> {carts.length} Pcs</span></h3>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Brand</th>
                                <th>Price</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                        
                            {
                                carts.map((cart,index) =>   <tr key={cart._id}>
                                    <th>{index+1}</th>
                                    <td><figure className=" rounded-lg"><img src={cart.photo} alt="photo" className="h-20 w-20 rounded-xl" /></figure> </td>
                                    <td className=" font-semibold">{cart.name}</td>
                                    <td className=" font-bold">{cart.brand}</td>
                                    <td className=" font-semibold">{cart.price}$</td>
                                    <th><button onClick={()=>handleDelete(cart._id)} className="btn btn-ghost"><MdDeleteForever className=" bg-red-700 h-8 w-8"></MdDeleteForever></button></th>
                                </tr> )
                            }
                          
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};
export default MyCart;