import { Helmet } from "react-helmet";
import Contact from "../../components/Contact/Contact";
import ShopByBrand from "../../components/ShopByBrand/ShopByBrand";
import UpCommingProduct from "../../components/UpCommingProduct/UpCommingProduct";

import Bannar from "../../components/bannar/Bannar";
import About from "../About/About";



const Home = () => {
    return (
        <>
        <Helmet>
            <title> Home | Tech Point</title>
        </Helmet>
        <div>
            <Bannar></Bannar>
            <ShopByBrand></ShopByBrand>
            <UpCommingProduct></UpCommingProduct>
            <About></About>
            <Contact></Contact>
        </div>
        </>
    );
};
export default Home;