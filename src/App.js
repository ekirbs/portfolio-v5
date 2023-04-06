import { useState } from 'react';
import { Navbar, Footer } from "./components";
// import { Home, Portfolio, Resume, LoFi, Weather, Contact } from './pages'

import "./assets/css/style.css";

export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'LoFi') {
      return <LoFi />;
    }
    if (currentPage === 'Weather') {
      return <Weather />;
    }
    if (currentPage === 'Map') {
      return <Map />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </>
  );
}
