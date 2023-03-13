import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";
import 'bootstrap-icons/font/bootstrap-icons.css'
import Vectorfooter from "./Vectorfooter.png";



export default function Footer(){
    return(
      <div className="footer">
        <footer className="bd-footer py-4 py-md-5 mt-5 bg-body-tertiary">
        <div className="container py-4 py-md-5 px-4 px-md-3 text-body-secondary">
            <div className="row">
            <div className="col-lg-3 mb-3 text-light">
                <img id="vetor" src={Vectorfooter}/>
                <span className="fs-5">Digital Store</span>
                <ul className="list-unstyled small">
                <li className="mb-2 mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</li>
                <li className="mb-2"><i class="bi-facebook facebook"></i><i class="bi-instagram instagram"></i><i class="bi-twitter twitter"></i></li>
                </ul>
            </div>
            <div className="col-6 col-lg-2 offset-lg-1 mb-3 text-light">
                <h5>Informações</h5>
                <ul className="list-unstyled">
                <li className="mb-2">Sobre</li>
                <li className="mb-2">Drip Store</li>
                <li className="mb-2">Segurança</li>
                <li className="mb-2">Wishlist</li>
                <li className="mb-2">Blog</li>
                <li className="mb-2">Trabalhe conosco</li>
                <li className="mb-2">Meus Pedidos</li>
                </ul>
            </div>
            <div className="col-6 col-lg-2 mb-3 text-light">
                <h5>Categorias</h5>
                <ul className="list-unstyled">
                    <li className="mb-2">Camisetas</li>
                    <li className="mb-2">Calças</li>
                    <li className="mb-2">Bonés</li>
                    <li className="mb-2">Headphones</li>
                    <li className="mb-2">Tênis</li>
                </ul>
            </div>
            <div className="col-6 col-lg-3 mb-3 text-light">
                <h5>Contato</h5>
                <ul className="list-unstyled small">
                <li className="mb-2">Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</li>
                <li className="mb-2">(85) 3051-3411</li>
                </ul>
            </div>
            
            </div>
            <hr className="text-light"></hr>
            <p className="text-light text-center">@ 2023 Digital College</p>
        </div>
        </footer>
    </div>
    );
}
