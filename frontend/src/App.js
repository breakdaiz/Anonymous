import React from 'react'
import { Container  } from 'react-bootstrap' 
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/Homescreen'
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom'


const App = () => {
  return (
    <>
    <Header/>
    <main className='py-3'>  
      <Container>
        <HomeScreen />
      </Container>
      </main>  
    <Footer/>
    </>
  ); 
}
export default App;
