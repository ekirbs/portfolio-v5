import { useState } from "react";
import { Header, Navbar, Projects, Techs, About, Main, Contact, Footer } from "./components";
import { Music, Weather } from "./pages";
import "./assets/css/globalStyle.css";

export default function App() {
  const [currentPage, setCurrentPage] = useState("Main");

  const renderPage = () => {
    if (currentPage === "Main") {
      return <Main />;
    }
    if (currentPage === "Music") {
      return <Music />;
    }
    return <Weather />
  };

  const handlePageChange = (page) => setCurrentPage(page);
 
  return (
    <>
      <Header />
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange}/>
      <Projects />
      <Techs />
      <About />
      {renderPage()}
      <Contact />
      <Footer />
    </>
  );
}
