import React from "react";

import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import PopularProduct from "../components/PopularProduct";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <PopularProduct />
    </div>
  );
};

export default Home;
