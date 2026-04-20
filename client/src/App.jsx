// App.js

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";

import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Services from "./components/Pages/Services";
import Portfolio from "./components/Pages/Portfolio";
import CaseStudy from "./components/Pages/CaseStudy";
import Blog from "./components/Pages/Blog";
import Pricing from "./components/Pages/Pricing";
import Contact from "./components/Pages/Contact";
import NotFound from "./components/Pages/NotFound";
import PortfolioDetail from "./components/Pages/PortfolioDetail";
import Jewelry from "./components/Pages/Jewelery";
import Clothes from "./components/Pages/clothes";
import TikTok from "./components/Pages/TikTok";
import SocialMedia from "./components/Pages/SocialMedia";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="case-study" element={<CaseStudy />} />
          <Route path="blog" element={<Blog />} />
          <Route path="pricing" element={<Pricing />} />
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