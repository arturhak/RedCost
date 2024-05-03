import React from 'react';
import './App.css';
import AuthLayout from "./auth/AuthLayout";
import Header from "./auth/Header";
import Footer from "./auth/Footer";

function App() {
  return (
      <div className="App">
        <div className="App-layout">
          <Header />
          <AuthLayout />
          <Footer />
        </div>
      </div>
  );
}

export default App;
