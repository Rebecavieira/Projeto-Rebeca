import "./styles.css";
import vetor from "./Vector.png";


export default function Navbar (){
    return(
        <div className="container">
            <section id="conjlogo">
                <img id="vetor" src={vetor}/>
                <a href="" id="logo">Digital Store</a>
                <input id="busca" placeholder="Pesquisar produto..."></input>
            </section>
        </div>
    );
}