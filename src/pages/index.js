import React from 'react';
import { Helmet} from 'react-helmet';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './styles.css';
import heroImg from '../assets/hero.jpg';
import cafe from '../assets/cafe.jpg';
import livro from '../assets/livro.jpg';
import rede from '../assets/rede.jpg';

const Hero = () => {
    
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
            <div className='flex flex-col sm:flex-row justify-around'>
              <img className="my-4 object-scale-down h-48 w-48" src={cafe} alt="Café da manhã"/>
              <img className="my-4 object-scale-down h-48 w-48" src={livro} alt="Biblioteca"/>
              <img className="my-4 object-scale-down h-48 w-48" src={rede} alt="Área de descanso"/>
            </div>
            <Footer/>
        </div>
    )
}

export default Index;