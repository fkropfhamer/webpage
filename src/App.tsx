import React from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Welcome from "./Welcome";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <Footer />
    </div>
  );
};

export default App;
