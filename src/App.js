import "./App.css";
import React, { useState } from "react";
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
import NoPage from "./NoPage/NoPage";
import FacultyMem from "./FacultyMem/FacultyMem";
import TabNav from "./TabNav/TabNav";
import Testing from "./Testing";
import Details from "./Dashboard/Table/Details";
import Print from "./Form/Print";
import FormHome from "./Form/FormHome";
import BIM from "./Faculties/BIM/BIM";
import MBS from "./Faculties/MBS/MBS";

function App() {
  const [badge, setBadge] = useState(false);
  const [clicked, setClicked] = useState(false);

  return (
    <div className="App">
      <ScrollRes />
      <ToastContainer></ToastContainer>
      <MessengerCustomerChat pageId="579816802074328" appId="829054781081682" />
      <Navbar clicked={clicked} setClicked={setClicked} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin-panel" element={<Panel />} />
        <Route path="/online-admission" element={<FormHome />} />

        <Route
          path="/contact-us"
          element={<Contact badge={badge} setBadge={setBadge} />}
        />
        <Route path="/about-management" element={<Management />} />
        <Route path="/admission-detail/:id" element={<Details />} />
        <Route path="/dashboard-login" element={<Dashboard />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/print/:id" element={<Print />} />

        <Route path="/faculty/bca" element={<BCA />} />
        <Route path="/faculty/bbs" element={<BBS />} />
        <Route path="/faculty/bhm" element={<BHM />} />
        <Route path="/faculty/csit" element={<CSIT />} />
        <Route path="/faculty/mbs" element={<MBS />} />

        <Route path="/faculty/bim" element={<BIM />} />
        <Route path="/news-event" element={<NewsAndEvents />} />
        <Route path="/faculty-members" element={<FacultyMem />} />
        <Route path="/devlopers" element={<Devlopers />} />
        <Route path="/testing" element={<Testing />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <TabNav clicked={clicked} setClicked={setClicked} />
      <Footer />
    </div>
  );
}

export default App;
