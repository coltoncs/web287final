import "./App.css";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import Project from "./pages/portfolio/project";

import mrp from "./img/mrp.JPG";
import ureco from "./img/ureco.JPG";
import portfolio from "./img/portfolio.png";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/portfolio/mrp"
          element={
            <Project
              name="Market Ready Painting"
              image={mrp}
              description="Market Ready Painting hired me to recreate their web presence.
        Previously on squarespace paying $200/year, I was able to create a new
        web presence for MRP and saved them the $200 yearly hosting costs,
        bringing their only costs down to a $6/year domain renewal."
              tech={["Google Firebase", "HTML5 & CSS3", "React.js", "Bulma"]}
              link="https://marketreadypaintingnc.com/"
            />
          }
        />
        <Route
          path="/portfolio/ureco"
          element={
            <Project
              name="United Restaurant Equipment Company"
              image={ureco}
              description="URECO hired me as a web developer to help fix their ecommerce presence.
              Prior to my employment, their website was barebones and product data was
              scattered and incomplete. Since my employment, I've updated the product
              catalog to include up-to-date information and high-quality images. I've
              also re-worked the original website pages into responsive pages that are
              integrated with the ecommerce platform, allowing URECO to delete their
              static Wix site and focus solely on the BigCommerce ecommerce website."
              tech={["NetSuite", "BigCommerce", "React.js", "HTML5", "Excel"]}
              link="https://ureco.com/"
            />
          }
        />
        <Route
          path="/portfolio/personal"
          element={
            <Project
              name="Personal Portfolio Website"
              image={portfolio}
              description="This is my personal blog/portfolio site that I built with Gatsby and
              deployed on Netlify. This was sort of an experiment for me in creating
              and deploying JAMstack websites, and had evolved over time. JAMstack's
              are nice to use for small sites, they use Markdown for data and the
              entire site is statically generated, leading to some fast load speeds.
              They're not as practical for large web apps, but for small websites and
              personal blogs they're a great alternative to the traditional CMS."
              tech={["Netlify", "Gatsby", "React.js", "Markdown"]}
              link="https://coltonsweeney.com/"
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;
