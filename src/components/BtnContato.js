import React from 'react';
import wa from '../assets/btn-whatsapp.png';
//import {Link} from 'react-router-dom'


const BtnContato = () => {
    return (
        <div>
        <button
        className='bg-white shadow-2xl rounded px-5 py-2 flex flex-col items-center mt-6 sm:mt-0 sm:flex-row hover:bg-blue-700 '
        type="button"
        onClick={(e) => {
          e.preventDefault();
          window.location.href='https://api.whatsapp.com/send?phone=+5584981565870';
          }}
    >
               <img className="object-scale-down h-20 w-20"  src={wa} alt='Whatsapp'/>
               <div className='ml-2'>
                   <h3 className='font-bold text-2xl'>Reserve conosco</h3>
                   <p className='text-xs'>Faça seu orçamento sem compromisso</p>
                   <p className='font-bold'>+55 (84) 98156-5870</p>
               </div>
               </button>
        
       </div>
    )

}
export default BtnContato;