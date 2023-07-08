import React from 'react';
import Typed from 'typed.js';

const HeroSection = () => {
  const initializeTypedAnimation = () => {
    const typedElement = document.querySelector('.typed');
    if (typedElement) {
      let typedStrings = typedElement.getAttribute('data-typed-items');
      typedStrings = typedStrings.split(',');

      new Typed('.typed', {
        strings: typedStrings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
      });
    }
  };

  React.useEffect(() => {
    initializeTypedAnimation();
  }, []);

  return (
    <section id="hero" className="d-flex flex-column justify-content-center">
      <div className="container" data-aos="zoom-in" data-aos-delay="100">
        <h1>Hrushikesh Patil</h1>
        <p>
          I'm{" "}
          <span
            className="typed"
            data-typed-items="Web Developer, Freelancer, Trainee Engineer"
          ></span>
        </p>
        <div className="social-links">
          <a href="#" className="twitter">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="#" className="facebook">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="#" className="instagram">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="#" className="google-plus">
            <i className="bx bxl-skype"></i>
          </a>
          <a href="#" className="linkedin">
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
