import { useState } from "react";
import { Header, Navbar, Divider, Projects, Techs, About, Main, Divider2, Divider3, Contact, Footer } from "./components";
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
      {/* <Divider /> */}
      <Projects />
      <Techs />
      <About />
      {/* <Divider3 /> */}
      {renderPage()}
      {/* <Divider2 /> */}
      <Contact />
      <Footer />
    </>
  );
}
