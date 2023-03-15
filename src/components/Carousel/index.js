import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import teniscarousel from './teniscarousel.png'
import ornament from './Ornament.png'
import { Container } from '@mui/material';
import Botao from '../BotaoOferta';
import './style.css'


export default function Carousel() {
  return (
    <div style={{backgroundColor: "#F5F5F5", padding: "50px 0"}}>
        <Container>
            <section id="banner">   
                <Grid container spacing={1}>
                    <Grid item xs={3}>
                        <p className="texto1">Melhores ofertas personalizadas</p>
                            <h2 className="texto2">Queima de <br /> stoque Nike 🔥</h2>
                            <p className="texto3">Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.
                            <Botao />
                        </p>
                    </Grid>
                    <Grid item xs={5}>
                        <img id="img-tenis" src={teniscarousel} />
                    </Grid>
                    <Grid item xs={4} >
                        <img id="img-ornament" src={ornament} />
                    </Grid>
                </Grid>
            </section>
        </Container>
    </div>
  );
}

