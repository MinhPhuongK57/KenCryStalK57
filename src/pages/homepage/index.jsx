import React from "react";

import Sliders from "../../components/slider_header/Sliders";
import MenuResponsive from "../../components/MenuResponsive";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Feature from "../../components/Feature";
import CV from "../../components/CV";
import Product from "../../components/Product";
import Slider from "../../components/SliderPersonalities";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";
import Search from "../../components/Search";

function homepage() {
  return (
    <div>
      <MenuResponsive />
      <Sliders />
      <Header />
      <Menu />
      <Search />
      <Feature />
      <CV />
      <Product />
      <Slider />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default homepage;
