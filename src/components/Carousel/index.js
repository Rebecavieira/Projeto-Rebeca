import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";
import ornament from "./Ornament.png";
import tenis from "./teniscarousel.png";
import 'bootstrap/dist/js/bootstrap.js';

export default function Carousel (){
    return(
        <>
        <div className="carrossel">
            <div className="col-12"> 
                <div id="carouselExampleIndicators" className="carousel slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row">
                                <div className="col-1 offset-11 mt-5">
                                    <img src={ornament} className="ornament" alt="..."/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4 text-start">
                                    <p className="texto1">Melhores ofertas personalizadas</p>
                                    <h2 className="texto2">Queima de <br /> stoque Nike 🔥</h2>
                                    <p className="texto3">Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.
                                    <button className="btn-verofertas">Ver ofertas</button>
                                    </p>
                                </div>
                                <div className="col-7">
                                    <img src={tenis} className="w-150 tenis-carrousel" alt="..."/>
                                </div>
                            </div>          
                        </div>

                        <div className="carousel-item active">
                            <div className="row">
                                <div className="col-1 offset-11 mt-5">
                                    <img src={ornament} className="ornament" alt="..."/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4 text-start">
                                    <p className="texto1">Melhores ofertas personalizadas</p>
                                    <h2 className="texto2">Queima de <br /> stoque Nike 🔥</h2>
                                    <p className="texto3">Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.
                                    <button className="btn-verofertas">Ver ofertas</button>
                                    </p>
                                </div>
                                <div className="col-7">
                                    <img src={tenis} className="w-150 tenis-carrousel" alt="..."/>
                                </div>
                            </div>          
                        </div>

                        <div className="carousel-item active">
                            <div className="row">
                                <div className="col-1 offset-11 mt-5">
                                    <img src={ornament} className="ornament" alt="..."/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4 text-start">
                                    <p className="texto1">Melhores ofertas personalizadas</p>
                                    <h2 className="texto2">Queima de <br /> stoque Nike 🔥</h2>
                                    <p className="texto3">Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.
                                    <button className="btn-verofertas">Ver ofertas</button>
                                    </p>
                                </div>
                                <div className="col-7">
                                    <img src={tenis} className="w-150 tenis-carrousel" alt="..."/>
                                </div>
                            </div>          
                        </div>

                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden invisible">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>        
        </>
    );
}
   