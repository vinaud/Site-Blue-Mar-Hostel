import React from 'react';
import BtnContato from '../components/BtnContato';
import facebook from '../assets/facebook.png';
import insta from '../assets/instagram.png';


const Footer = () => {
    return(
        <div>
          <footer className = 'p-4 bg-gray-200 sm:flex justify-between items-center' >
            <div>
              <h5>Blue Mar Hostel</h5>
              <p>Rua Luiz Estevam, 94, Ponta Negra, Natal/RN</p>
            </div>
            <div className = 'sm:flex justify-between '>
              <a href="https://www.facebook.com/bluemarhostelnatal" target="_blank" rel="noopener noreferrer">
                  <img className="object-scale-down h-20 w-20 p-4"  src={facebook} alt='Facebook'/>
              </a>
              <a href="https://www.instagram.com/bluemarhostelnatal/" target="_blank" rel="noopener noreferrer">
                  <img className="object-scale-down h-20 w-20 p-4"  src={insta} alt='Instagram'/>
              </a>
            </div>
            <BtnContato/>
          
          </footer>
        </div>

    )

}

export default Footer;