import { useEffect, useState } from "react";
import { Link } from "react-router-dom";




const ShopByBrand = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch('/brand.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data);  
                setCards(data);
            });
    }, []);

    return (
        <div className=" min-h-screen bg-base-100">
            <h1 className="text-3xl font-bold text-center py-10">Shop By Brand</h1>
            <div className="grid  lg:grid-cols-3 gap-4 p-10">
                {
                    cards.map(card => <Link to={`/brandproduct/${card.brand}`} key={card.id}>
                        <div className="card w-auto glass">
                            <figure className="h-52"><img src={card.photo} alt="card!" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{card.brand}</h2>
                            </div>
                        </div>
                    </Link>)
                }
            </div>

        </div>
    );
};
export default ShopByBrand;
