import React from 'react';
import BtnContato from '../components/BtnContato';


const Footer = () => {
    return(
        <div>
          <footer className = 'p-4 bg-gray-200 sm:flex justify-between items-center' >
            <div>
              <h5>Blue Mar Hostel</h5>
              <p>Rua Luiz Estevam, 94, Ponta Negra, Natal/RN</p>
            </div>

            <BtnContato/>
          
          </footer>
        </div>

    )

}

export default Footer;