import React, { Component } from 'react';
import Card from '../../components/Card/card';
import Footer from '../../containers/Footer/footer';

class Layout extends Component {

    render(){
        return(
             <div>
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
