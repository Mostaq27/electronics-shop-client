import { useEffect, useState } from "react";
// import ShopByBrandCard from "./ShopByBrandCard";



const ShopByBrand = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch('/brand.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);  
                setCards(data);
            });
    }, []);
    
    return (
        <div>
            <h1 className="text-3xl font-bold text-center p-10">Shop By Brand:{cards.length}</h1>
            <div className="grid  grid-cols-3 gap-6 p-20">
                 {
                    cards.map(moin =>     <div className="card w-96 glass">
                    <figure className="h-52"><img src= {moin.photo} alt="car!"/></figure>
                    <div className="card-body">
                      <h2 className="card-title">{moin.brand}</h2>
                       
                      {/* <div className="card-actions justify-start">
                        <button className="btn btn-primary">Shop now</button>
                      </div> */}
                    </div>
                  </div>)
                 }
            </div>

        </div>
    );
};
export default ShopByBrand;
 