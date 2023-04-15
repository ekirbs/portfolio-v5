import { useState } from "react";
import { Header, Navbar, Divider, Projects, Techs, About, AboutHeader, Resume, Main, ResumeDivider, Divider2, Divider3, ContactHeader, Contact, Footer } from "./components";
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
      <Divider />
      <Projects />
      <Techs />
      <AboutHeader />
      <About />
      {/* <Divider3 /> */}
      <ResumeDivider />
      <Resume />
      {/* {renderPage()} */}
      {/* <Divider2 /> */}
      <ContactHeader />
      <Contact />
      <Footer />
    </>
  );
}
