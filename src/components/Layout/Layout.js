import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({ className, children }) => {
    return (
        <div className={className}>
            <Header />
            <main
                className="
                    grid-12--desktop-small 
                    grid-12--desktop-large 
                    main-container
                "
            >
                {children}
            </main>  
            <Footer />
        </div>
    )
}

export default Layout;
