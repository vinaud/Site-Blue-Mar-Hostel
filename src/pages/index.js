import React from 'react';
import { Helmet} from 'react-helmet';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './styles.css';
import heroImg from '../assets/hero.jpg';

const Hero = () => {
    
    return(
        <div className='flex flex-col items-center sm: bg-cover bg-center text-center justify-between bg-fixed ' style={{ backgroundImage: `url(${heroImg})`  }}  >
              <div className='p-8'>
                  <h2 className='font-bold text-6xl text-white text-center '>Sua casa fora de casa</h2>
                  <p className='text-2xl text-white '>Localizado bem pertinho da praia de Ponta Negra</p>
                  <p className='text-gray-400'>Faça sua reserva conosco </p>
                
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
            
            <Footer/>
        </div>
    )
}

export default Index;