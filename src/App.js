import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar";
import Hero from "./Components/hero/Hero";
import FeaturedProperties from "./Components/featuredProperties/FeaturedProperties";
import Footer from "./Components/footer/Footer";
import Properties from "./Components/properties/Properties";
import PropertyDetails from "./Components/propertyDetails/PropertyDetails";
import Signin from "./Components/signin/Signin";
import Signup from "./Components/signup/Signup";
import About from "./about/About";
import PrivateComponent from "./Components/PrivateComponent";
import Home from "./home/Home";
import AddProperty from "./Components/addProperty/Addproperty";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/contact"
            element={
              <>
                <Navbar />
                <Hero />
                <h1>I AM CONTACT</h1>
                <Footer />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <About />
              </>
            }
          />
          <Route element={<PrivateComponent />}>
            <Route
              path="/properties"
              element={
                <>
                  <Navbar /> <Properties /> <Footer />
                </>
              }
            />
            <Route
              path="/property-details/:id"
              element={
                <>
                  <Navbar /> <PropertyDetails /> <Footer />
                </>
              }
            />
            <Route
              path="/featured"
              element={
                <>
                  <Navbar /> <FeaturedProperties /> <Footer />
                </>
              }
            />
            <Route
              path="/add-property"
              element={
                <>
                  <Navbar />
                  <AddProperty />
                  <Footer />
                </>
              }
            />
          </Route>
          <Route
            path="/signin"
            element={
              <>
                <Navbar /> <Signin />{" "}
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                <Navbar /> <Signup /> <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
