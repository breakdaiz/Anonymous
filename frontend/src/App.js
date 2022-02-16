import React from 'react';
import { Container  } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/Homescreen';
import About from './screens/About';
import { BrowserRouter , Routes, Route,   } from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <main className='py-3'>  
      <Container>
        <Routes>
            <Route index element={<HomeScreen />} />
            <Route  path='/about' element={<About/>} />
        </Routes>
      
      </Container>
    </main>  
    <Footer/>
    </BrowserRouter>
  ); 
}
export default App;
