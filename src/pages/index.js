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
import cisne from '../assets/quartos/cisne.jpg'
import amazonas from '../assets/quartos/amazonas.jpeg'
import atrevida from '../assets/quartos/atrevida.jpg'
import bounty from '../assets/quartos/bounty.jpeg'
import endurance from '../assets/quartos/endurance.jpg'
import plancton from '../assets/quartos/plancton.jpg'

const Selos = () => {
    return(
        <div className='pb-8 bg-gray-200 flex flex-col sm:flex-row justify-around'>
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
    const quartos = [new Room("Plâncton","Quarto com cama para casal, ar-condicionado, TV, banheiro próprio." ,plancton),
    new Room("Amazonas","Quarto com cama para casal, uma cama solteiro, dois beliches, ar-condicionado, TV, banheiro próprio.",amazonas),
    new Room("Cisne Branco","Quarto com cama para casal, um beliche, ar-condicionado, TV, banheiro próprio.",cisne),
    new Room("Endurance","Quarto com cama para casal,um beliche, ar-condicionado, TV, banheiro próprio. ",endurance),
    new Room("Bounty","Quarto com cama para casal,um beliche, ar-condicionado, TV, banheiro próprio." ,bounty),
    new Room("Atrevida","Quarto compartilhado misto, com quatro beliches, ventilador e banheiro próprio.",atrevida)];

    return(
        <div>
            <Helmet>
                 <title>Blue Mar Hostel</title>
            </Helmet>
            <Header/>
            <Hero/>
            <Selos/>
            <div>
              <h2 className='px-8 py-2 text-4xl font-bold'>Nossos quartos:</h2>
              <div className='flex flex-wrap justify-around'>
              {quartos.map((quarto) => {
                     return(
                       <div className='max-w-sm'>
                        <div className=' m-6 rounded shadow-lg sm:flex flex-col '>
                            <img  src={quarto.image} alt='Quarto'/>
                            <div className='px-6 py-4'>
                                <p className ='font-bold text-xl mb-2'>{quarto.name}</p>
                                <p>{quarto.description}</p>
                            </div>
                        </div>
                      </div>
                     )
              })}
              </div>
          </div>
            <Footer/>
        </div>
    )
}

export default Index;