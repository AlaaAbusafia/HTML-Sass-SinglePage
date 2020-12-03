import React, { Component } from 'react';
import Header from '../../containers/Header/header';
import About from '../../containers/About/about';
import Services from '../../containers/Services/services';
import Card from '../../components/Card/card';
import Footer from '../../containers/Footer/footer';



class Layout extends Component {

    render(){
        return(
             <div>
                
                <Header />
                <section class="section-about" id="about">
                    <About />
                </section>
                <Services />
                <section className="cards" id="team">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </section>
                <footer className="footer">
                    <Footer />
                </footer>
            </div>
    
        );
    }
}
    
      
export default Layout;
