import Contact from "../../components/Contact/Contact";
import ShopByBrand from "../../components/ShopByBrand/ShopByBrand";
import UpCommingProduct from "../../components/UpCommingProduct/UpCommingProduct";
 
import Bannar from "../../components/bannar/Bannar";
import About from "../About/About";
 


const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <About></About>
            <ShopByBrand></ShopByBrand>
            <UpCommingProduct></UpCommingProduct>
             <Contact></Contact>
        </div>
    );
};
export default Home;