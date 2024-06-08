import React from 'react';
import './App.scss';
import Header from "./auth/Header";
import Footer from "./auth/Footer";
import IndexRoute from "./routes/IndexRoute";

function App() {
  return (
      <div className="App">
        <div className="App-layout">
          <Header />
          <IndexRoute />
          <Footer />
        </div>
      </div>
  );
}

export default App;
