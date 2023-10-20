import Contact from "../../components/Contact/Contact";
import ShopByBrand from "../../components/ShopByBrand/ShopByBrand";
 
import Bannar from "../../components/bannar/Bannar";
import About from "../About/About";
 


const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <About></About>
            <ShopByBrand></ShopByBrand>
           
             <Contact></Contact>
        </div>
    );
};
export default Home;