import React from 'react';
import { Helmet} from 'react-helmet';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './styles.css';
import heroImg from '../assets/hero.jpg';
import cafe from '../assets/cafe.jpg';
import livro from '../assets/livro.jpg';
import rede from '../assets/rede.jpg';
import Room from '../entities/room.js';

const Selos = () => {
    return(
        <div className='pb-8 bg-gray-400 flex flex-col sm:flex-row justify-around'>
    <div className='flex flex-col justify-around'>
        <img className="my-4 object-scale-down h-64 w-64" src={cafe} alt="Café da manhã"/>
        <h1 className="text-xl font-bold  text-black text-center ">Café da manhã completo</h1>
    </div>
    <div className='flex flex-col justify-around'>
        <img className="my-4 object-scale-down h-64 w-64" src={livro} alt="Biblioteca"/>
        <h2 className="text-xl font-bold  text-black text-center ">Biblioteca compartilhada</h2>
    </div>
    <div className='flex flex-col justify-around'>
        <img className="my-4 object-scale-down h-64 w-64" src={rede} alt="Área de descanso"/>
        <h2 className="text-xl font-bold  text-black text-center ">Áreas de lazer e descanso</h2>
    </div>
  </div>)
}

const Hero = () => {
    let quarto1 = new Room("","","");
    return(
        <div className='p-32 flex flex-col items-center  sm: bg-cover bg-center  text-center justify-between bg-fixed ' style={{ backgroundImage: `url(${heroImg})` }}  >
              <div className='  rounded-lg p-8 bg-gray-300 bg-opacity-50'>
                  <h2 className='font-bold text-6xl text-black text-center '>Sua casa fora de casa</h2>
                  <p className='text-4xl text-black '>Localizado bem pertinho da praia de Ponta Negra</p>
                  <p className='text-4xl text-black'>Faça sua reserva conosco </p>
                  
              </div>
              
          </div>
    )

}

const Index = () => {
    return(
        <div>
            <Helmet>
                 <title>Blue Mar Hostel</title>
            </Helmet>
            <Header/>
            <Hero/>
            <Selos/>
            <Footer/>
        </div>
    )
}

export default Index;