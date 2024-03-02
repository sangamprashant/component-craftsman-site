import React from "react";
import "./Home.css";
import { HeroImage, ImageHome, LogoOne } from "../../images";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import { servicesArray } from "./HomeData";

function Home() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center">
            <div className="home-title">
              <h1>Component Craftsman</h1>
              <p className="text-muted">
                A React UI library with pre-built components, styling options,
                and input validation features for streamlined web development.
              </p>
            </div>
          </div>
          <div className="col-md-6 ">
            <img
              src={HeroImage}
              alt=""
              className="object-fit-contain home-image"
              width={"100%"}
            />
          </div>
        </div>
      </div>
      <div className="c-section">
        <ul className="c-services">
          {servicesArray.map((service, index) => (
            <li className="c-services__item" key={index}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default Home;
