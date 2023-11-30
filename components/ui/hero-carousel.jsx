import { useState } from "react";
import { getDefaultContent } from "./hero-carousel.content";

function HeroCarousel(props) {

  let slides;
  if (!props.content) {
    slides = getDefaultContent();
  } else {
    slides = props.content;
  }

  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <section id="hero-carousel" className="site-container flex flex-col overflow-hidden relative md:min-h-[380px] lg:px-4">


      <div className="flex flex-col">
      <img
        loading="lazy"
        src={slides[currentSlide].src}
        className="absolute z-[-1] h-full w-full mx-auto lg:h-96 object-cover object-center lg:inset-0"
        alt={slides[currentSlide].alt}
      />
        {/* top containier */}
        <div className="flex flex-row justify-between">
            <div id="previous-slide" className="mt-28 md:mt-16">
            <div onClick={goToPrevSlide} className="-mr-12 md:mr-2 opacity-40">
              <svg
                width="100px"
                height="200px"
                viewBox="0 0 1024 1024"
                className="icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"
                  fill="#747474"
                />
              </svg>
            </div>
          </div>
          {/* text overlay and button */}
          <div className="text-white w-80 h-96 md:w-4/6 lg:w-3/4">
            <div className="flex flex-col h-80 py-16 pb-4">
            <h1 className="text-white text-4xl leading-10 md:w-full max-w-full ">
              {slides[currentSlide].headline}
            </h1>
            {slides[currentSlide].subhead && (
              <p className="text-xl pb-8">{slides[currentSlide].subhead}</p>
            )}
            
            </div>
            <a
              href={slides[currentSlide].buttonUrl}
              className="mt-14 px-5 py-5 text-white text-center text-base items-center  border bg-cyan-500 bg-opacity-60 max-w-full   border-solid border-sky-400 rounded"
            >
              {slides[currentSlide].buttonText}
            </a>
          </div>
          <div id="next-slide" className="mt-28 md:mt-16">
            <div onClick={goToNextSlide} className="-ml-12 md:ml-2 opacity-40">
              <svg
                width="100px"
                height="200px"
                viewBox="0 0 1024 1024"
                className="icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
                  fill="#747474"
                />
              </svg>
            </div>
          </div>
        </div>
        {/* dot navigation */}
        <div id="nav-buttons" className="flex justify-center mb-4 md:-mt-16">
          {slides.map((slide, index) => (
            <div
              key={index}
              onClick={() => goToSlide(index)}
              className={`mx-2 mt-4 h-8 w-8 rounded-full bg-tertiaryAccent ${
                index === currentSlide ? "bg-gray-400" : ""
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroCarousel;
