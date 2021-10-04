import React from "react";
import "./Home.css";
import background from "../../images/hero.jpg";

const Home = () => {
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "500px",
    backgroundPosition: "center",
  };

  return (
    <div>
      {/* hero section */}
      <section style={heroStyle}>
        <div className='hero-text'>
          <h1 className='text-capitalize display-2 fw-bold text-danger '>
            Best IT training institutes of <span className='text-info'>Bangladesh</span>
          </h1>
          <div className='mt-5'>
            <button className='mx-2 btn btn-primary fw-bold'>Login</button>
            <button className='mx-2 btn btn-danger fw-bold'>Sing Up</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
