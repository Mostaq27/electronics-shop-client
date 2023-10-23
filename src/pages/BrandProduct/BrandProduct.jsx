import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import img1 from "../../assets/Cover-1.jpg"
import img2 from "../../assets/cover-2.jpg"
import img3 from "../../assets/cover-3.jpg"
import img4 from "../../assets/cover-4.webp"
import BrandProductCart from "./BrandProductCart";
import { Helmet } from "react-helmet";


const BrandProduct = () => {

    const { brand } = useParams()

    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://electronics-shop-server.vercel.app/product')
            .then(res => res.json())
            .then(data => {
                const filteredData = data.filter(product => product.brand.toLowerCase() === brand.toLowerCase())
                setProducts(filteredData)

            })
    }, [])

    return (
        <>
            <Helmet>
                <title>{brand} | Tech Point</title>
            </Helmet>

            <div className=" bg-base-200">
                <div className="carousel w-full h-[70vh]">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={img1} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={img2} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={img3} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src={img4} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>

                <div className=" space-y-20 py-12 bg-base-200">
                    <h3 className="text-center text-2xl font-bold">
                        Shop Brand : <span className="text-orange-400">{brand}</span>
                    </h3>
                </div>


                {
                    products.length == 0 ? <div className="flex justify-center items-center h-[50vh]"> <h1 className="text-3xl font-bold text-center text-red-800">Found no data</h1></div> :


                        <div className="grid  lg:grid-cols-2 gap-5 p-10">

                            {

                                products?.map(product => <BrandProductCart key={product._id} product={product}></BrandProductCart>)
                            }
                        </div>

                }
            </div>
        </>
    );
};
export default BrandProduct;


