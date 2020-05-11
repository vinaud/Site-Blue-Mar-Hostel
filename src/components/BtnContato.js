import React from 'react';
import wa from '../assets/btn-whatsapp.png';

const BtnContato = () => {
    return (
        <div className='bg-white shadow-2xl rounded px-5 py-2 flex flex-col items-center mt-6 sm:mt-0 sm:flex-row'>
               <img className="object-scale-down h-20 w-20"  src={wa} alt='Whatsapp'/>
               <div className='ml-2'>
                   <h3 className='font-bold text-2xl'>Orçar o seu projeto</h3>
                   <p className='text-xs'>Projeto e orçamento sem compromisso</p>
                   <p className='font-bold'>(84) 91234-5678</p>
               </div>
            </div>
    )

}
export default BtnContato;