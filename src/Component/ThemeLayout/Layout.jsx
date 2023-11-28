import React from 'react';
import { Routes,Route, HashRouter} from 'react-router-dom';
import NavbarLink from '../Navbar/NavbarLink'
import Home from '../Pages/Home';
import Contact from '../Pages/Contact';
import About from '../Pages/About';
import Footer from '../Pages/Footer';
import Services from '../Pages/Services';
import Error from '../Pages/Error';

const Layout = () => {
return(
    <>
       <div className="theme-layout"> 
       <HashRouter>
                <NavbarLink />
            <Routes>
                <Route index path='/' element={<Home /> } />
                <Route path='/contact' element={<Contact />} />
                <Route path='/about' element={<About />} />
                <Route path='/services' element={<Services />} />

                <Route path='*' element={<Error />} />
            </Routes>
       </HashRouter>         
            <Footer />     
       </div>
    </>
)
}

export default Layout;