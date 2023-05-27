import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar";
import Hero from "./Components/hero/Hero";
import PopularProperties from "./Components/popularProperties/PopularProperties";
import FeaturedProperties from "./Components/featuredProperties/FeaturedProperties";
import NewsLetter from "./Components/newsLetter/NewsLetter";
import Footer from "./Components/footer/Footer";
import Properties from "./Components/properties/Properties";
import PropertyDetails from "./Components/propertyDetails/PropertyDetails";
import Signin from "./Components/signin/Signin";
import Signup from "./Components/signup/Signup";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <PopularProperties />
                <FeaturedProperties />
                <NewsLetter />
                <Footer />
              </>
            }
          />

          <Route
            path="/properties"
            element={
              <>
                <Navbar /> <Properties /> <Footer />
              </>
            }
          />
          <Route
            path="/propertyDetails/:id"
            element={
              <>
                <Navbar /> <PropertyDetails /> <Footer />
              </>
            }
          />

          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
