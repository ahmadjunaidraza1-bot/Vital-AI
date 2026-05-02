// App.js

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Services from "./components/Pages/Services";
// import OurWork from "./components/Pages/OurWork";
// import CaseStudy from "./components/Pages/CaseStudy";
import Blog from "./components/Pages/Blog";
import Contact from "./components/Pages/Contact";
import NotFound from "./components/Pages/NotFound";
import PortfolioDetail from "./components/Pages/PortfolioDetail";
import Jewelry from "./components/Pages/Jewelery";
import Clothes from "./components/Pages/Clothes";
import TikTok from "./components/Pages/TikTok";
import SocialMedia from "./components/Pages/SocialMedia";
import OurWork from "./components/Pages/OurWork";

function App() {
  return (
    <BrowserRouter>
     <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="our-work" element={<OurWork />} />
          {/* <Route path="case-study" element={<CaseStudy />} /> */}
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="jewelery" element={<Jewelry />} />
          <Route path="clothes" element={<Clothes />} />
          <Route path="tiktok" element={<TikTok />} />
          <Route path="socialmedia" element={<SocialMedia />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/portfolio/:id" element={<PortfolioDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;