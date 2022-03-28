import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Screens
import HomeScreen from "./screens/HomeScreen";
import About from "./screens/About";
import ProductScreen from "./screens/ProductScreen";
import ProductScreenDetail from "./screens/ProductScreenDetail";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";

// import ProductSummary  from './screens/ProductSummary';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route index element={<HomeScreen />} />
            <Route path='about' element={<About />} />
            <Route path='login' element={<LoginScreen />} />

            <Route path='cart'>
              <Route path=':id' element={<CartScreen />} />
              <Route path='' element={<CartScreen />} />
            </Route>

            <Route path='product' element={<ProductScreenDetail />}>
              <Route path=':id' element={<ProductScreen />} />
              {/* <Route path="sent" element={<ProductSummary />} /> */}
            </Route>
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
