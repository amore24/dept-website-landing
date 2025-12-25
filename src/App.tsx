import React from 'react';
import { Route, Routes } from "react-router-dom";
import NavBar from './NavBar';
import Home from './Home';
import Form from './Form';
import Footer from './Footer';
import ViewIndustries from './ViewIndustries';

const App = () => {
  return (
    <main>
      <NavBar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view-industries" element={<ViewIndustries />} />
      </Routes>
      <Form />
      <Footer />
    </ main>
  );
};

export default App;