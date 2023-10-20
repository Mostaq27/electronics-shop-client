import { useEffect, useState } from "react";
import ShopByBrandCard from "./ShopByBrandCard";



const ShopByBrand = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch('/brand.json')
            .then(res => res.json())
            .then(data => {
                console.log(data); // Log the fetched data to the console
                setCards(data);
            });
    }, []);
    
    return (
        <div>
            <h1 className="text-3xl font-bold text-center p-10">Shop By Brand</h1>
            <div className="grid  lg:grid-cols-3 gap-6 p-20">
                 {
                    cards.map(card=><ShopByBrandCard key={card.id} card={card}></ShopByBrandCard>)
                 }
            </div>

        </div>
    );
};
export default ShopByBrand;
 