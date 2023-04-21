import React from "react";
// import { useState } from "react";
import { Header, Navbar, Divider, Projects, Techs, About, AboutHeader, Resume, Main, ResumeDivider, ContactHeader, Contact, Footer } from "./components";
// import { Music, Weather } from "./pages";
import "./assets/css/globalStyle.css";

export default function App() {
  // const [currentPage, setCurrentPage] = useState("Main");

  // const renderPage = () => {
  //   if (currentPage === "Main") {
  //     return <Main />;
  //   }
  //   if (currentPage === "Music") {
  //     return <Music />;
  //   }
  //   return <Weather />
  // };

  // const handlePageChange = (page) => setCurrentPage(page);
 
  return (
    <>
      <Header />
      <Navbar />
      <Divider />
      <Projects />
      <Techs />
      <AboutHeader />
      <About />
      <ResumeDivider />
      <Resume />
      {/* <Navbar2 currentPage={currentPage} handlePageChange={handlePageChange}/> */}
      {/* {renderPage()} */}
      <ContactHeader />
      <Contact />
      <Footer />
    </>
  );
}
