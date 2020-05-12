import React from 'react';
import { Helmet} from 'react-helmet';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './styles.css';

const Index = () => {
    return(
        <div>
            <Helmet>
                 <title>Blue Mar Hostel</title>
            </Helmet>
            <Header/>
            <h1> Hello Warudo </h1>
            <a href="https://api.whatsapp.com/send?phone=1111111111">Send Message</a>
            <Footer/>
        </div>
    )
}

export default Index;