import {Link} from "react-router-dom";
import './styles.css';

export default function Menu (){
    return(
        <div className="container">
           <Link className="links" to="/" id="home">Home</Link>
           <Link className="links" to="/produtos" id="produtos">Produtos</Link> 
           <Link className="links" to="/categorias" id="categorias">Categorias</Link> 
           <Link className="links" to="/meus-pedidos" id="pedidos">Meus Pedidos</Link>  
        </div>
    );
}

