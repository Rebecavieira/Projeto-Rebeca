import Carousel from "../../components/Carousel";
import OfertaDestaque from "../../components/OfertaDestaque";
import Footer from "../../components/Footer";


export default function Home (){
    return(
        <div>
            
            <Carousel />
            <OfertaDestaque/>
            <Footer />
        </div>
    );
}