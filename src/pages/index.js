import React from 'react';
import { Helmet} from 'react-helmet';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './styles.css';
import heroImg from '../assets/hero.jpg';

const Hero = () => {
    
    return(
        <div className='flex flex-col items-center sm:flex-row sm: justify-between bg-fixed'  >
              <div className='p-8'>
                  <h2 className='font-bold text-2xl'>Sua casa fora de casa</h2>
                  <p className='text-xl '>Localizado bem pertinho da praia de Ponta Negra</p>
                  <p className='text-blue-800'>Faça sua reserva conosco </p>
              </div>
              <img className='w-1/2' src ={heroImg} alt='Blue Mar Hostel'/>
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
            <h1> Hello Warudo </h1>
            <a href="https://api.whatsapp.com/send?phone=1111111111">Send Message</a>
            <Footer/>
        </div>
    )
}

export default Index;