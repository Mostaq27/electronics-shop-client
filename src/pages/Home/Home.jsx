import Contact from "../../components/Contact/Contact";
import ShopByBrand from "../../components/ShopByBrand/ShopByBrand";
import ShopByBrandCard from "../../components/ShopByBrand/ShopByBrandCard";
import Bannar from "../../components/bannar/Bannar";
import About from "../About/About";
 


const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <About></About>
            <ShopByBrand></ShopByBrand>
            <ShopByBrandCard></ShopByBrandCard>
             <Contact></Contact>
        </div>
    );
};
export default Home;