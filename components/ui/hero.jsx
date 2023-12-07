import Image from "next/image";

function Hero(props) {
  let desktopImage = props?.desktopImage || "/images/hero-desktop.png";
  let mobileImage = props?.mobileImage || "/images/hero-mobile.png";
  let title = props?.title || "[Title]";
  let body = props?.body || "[Body]";
  let buttonLabel = props?.buttonLabel || "[Button Label]";
  let buttonLink = props?.buttonLink || "#";

  return (
    <div className="flex h-[600px] md:h-[400px]">
      <img
        src={desktopImage}
        className="hidden md:block md:absolute top-0 left-0 md:h-[400px] w-screen z-10"
      />
      <img
        src={mobileImage}
        className="absolute w-screen md:hidden top-0 left-0 h-[600px] z-10"
      />
      <div
        id="hero-content"
        className="absolute top-0 left-0 w-screen z-20 px-4 md:px-6"
      >
        <div className="flex flex-col my-20 md:my-12 md:w-[45%]">
          <h1 className="text-black font-light" aria-label={title}>
            {title}
          </h1>
          <div className="relative items-center flex p-6 max-w-full gap-2 max-md:flex-wrap mb-4 text-sm" dangerouslySetInnerHTML={{ __html: body }}></div>
          <div className="mt-0">
            <button className="bg-primaryAccent hover:bg-secondaryLight rounded-3xl">
              <a href={buttonLink} className="items-start text-sm p-0">
                {buttonLabel}
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
