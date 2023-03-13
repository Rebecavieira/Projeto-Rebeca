import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";
import tenis from "./tenisdestaque.png";


export default function OfertaDestaque (){
    return(
        <div className="row" id="ofertadest">
                <section className="col-5" id="ladoe">
                    <div id="img">
                        <div id="elipse"></div>
                        <img id="tenis" src={tenis}/>
                    </div>
                </section>
                <section id="descricao" className="col-6 offset-1">
                    <a href="" id="oferta">Oferta especial</a>
                    <h1 id="ofertah1">Air Jordan edição de colecionador</h1>
                    <p id="ofertap" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                    
                    <button className="botao">Ver oferta</button>
                </section>
        </div>
    );
} 