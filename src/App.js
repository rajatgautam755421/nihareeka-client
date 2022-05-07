import "./App.css";
import React from "react";
import MessengerCustomerChat from "react-messenger-customer-chat/lib/MessengerCustomerChat";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import CSIT from "./Faculties/CSIT/CSIT";
import BCA from "./Faculties/BCA/BCA";
import BBS from "./Faculties/BBS/BBS";
import BHM from "./Faculties/BHM/BHM";
import Contact from "./Contact/Contact";
import Gallery from "./Gallery/Gallery";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import About from "./About/About";
import Management from "./Management/Management";
import NewsAndEvents from "./NewsAndEvents/NewsAndEvents";
import { ToastContainer } from "react-toastify";
import Dashboard from "./Dashboard/Dashboard1";
import Panel from "./Dashboard/Panel";
import ScrollRes from "./ScroolRestoration/ScroolRestoration";
import Devlopers from "./Devlopers/Devlopers";

function App() {
  return (
    <div className="App">
      <ScrollRes />
      <ToastContainer></ToastContainer>
      <MessengerCustomerChat pageId="111241211239691" appId="829054781081682" />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin-panel" element={<Panel />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/about-management" element={<Management />} />
        <Route path="/dashboard-login" element={<Dashboard />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/faculty/bca" element={<BCA />} />
        <Route path="/faculty/bbs" element={<BBS />} />
        <Route path="/faculty/bhm" element={<BHM />} />
        <Route path="/faculty/csit" element={<CSIT />} />
        <Route path="/news-event" element={<NewsAndEvents />} />
        <Route path="/devlopers" element={<Devlopers />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
