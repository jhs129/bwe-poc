import { useState } from "react";
import { getDefaultContent } from "./header.content";
import Link from "next/link";
import Image from "next/image";
import MobileNav from "./mobile-nav";

function Header(props) {
  const [isOpen, setIsOpen] = useState(false);

  let navigation;
  if (!props.navigation) {
    navigation = getDefaultContent();
  } else {
    navigation = props.navigation;
  }

  let mobileNavigation;
  if (!props.mobileNavigation) {
    mobileNavigation = getDefaultContent();
  } else {
    mobileNavigation = props.mobileNavigation;
  }

  let logoImage = "/logo-prod.webp";
  if (props?.logo) {
    logoImage = props.logo;
  }

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenu = () => {
    const menu = document.getElementById("mobile-nav");
    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");

    const header = document.getElementById("header");
    header.classList.toggle("bg-primaryLight");
    header.classList.toggle("bg-nav1");

    const hamburger = document.getElementById("hamburger-div");
    hamburger.classList.toggle("bg-primaryLight");
    hamburger.classList.toggle("bg-nav1");

    const logo = document.getElementById("logo");
    logo.classList.toggle("hidden");
  };

  return (
    <header id="header" className="bg-primaryLight container mx-auto z-20">
      <div className="px-6 pt-8 md:py-4">
        <div className="flex flex-col gap-4 max-md:flex-wrap lg:flex-row lg:justify-between">
          {/* Logo and Hamburger Menu - Layer 1 */}
          <div id="top-row" className="flex flex-row">
            {/* Logo Image */}

            <div
              className={`flex pt-2 w-[90%] lg:w-full items-start ${
                isOpen ? " bg-nav1 " : " bg-primaryLight"
              }`}
            >
              <Link href="/">
                <Image
                  id="logo"
                  src={logoImage}
                  alt="Logo Image"
                  width={100}
                  height={40}
                  className="rounded-none shadow-none"
                />
              </Link>
            </div>

            {/*  Hamburger Button */}
            <div
              id="hamburger-div"
              className={`flex lg:hidden w-[10%] pt-2 md:flex md:items-center md:justify-end${
                isOpen ? " bg-nav1" : " bg-primaryLight"
              }`}
            >
              <button
                id="menu-btn"
                aria-label="hamburger menu"
                className={`block lg:hidden hamburger  focus:outline-none ${
                  isOpen
                    ? "open bg-nav1 hover:bg-nav1"
                    : " bg-primaryLight hover:bg-primaryLight "
                }`}
                type="button"
                onClick={() => {
                  toggleOpen();
                  toggleMenu();
                }}
              >
                <div className="flex flex-col">
                  <span className="hamburger-top"></span>
                  <span className="mt-1 hamburger-middle"></span>
                  <span className="mt-2 hamburger-bottom"></span>
                </div>
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav
            id="t-nav"
            className="hidden lg:flex lg:flex-row justify-between"
          >
            {/* Desktop Navigation */}

            <div id="desktop-nav" className="flex lg:flex lg:flex-row align-middle">
              <div className="items-start flex justify-between gap-5 my-auto px-5 py-px max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                {navigation.group[0].level1.map((item, index) => (
                  <Link
                    key={index}
                    href={item.src}
                    className="text-black text-center text-xs font-medium tracking-widest uppercase self-stretch whitespace-nowrap"
                    aria-label={item.text}
                  >
                    {item.text}
                  </Link>
                ))}
              </div>{" "}
              <div className="items-center self-stretch flex gap-4 p-5 max-md:justify-center">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e4c0536882f4a8bb1bc0f8983d4be5476d8b9d269a152e651da9c8769e0dc06?apiKey=3eaf368fadc34ce186c057ae620a9503&"
                  className="aspect-square object-contain object-center w-8 overflow-hidden self-stretch shrink-0 max-w-full"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca26955bc0d5bdc11bf844d1b86da48fd7500ab11c2b8b1fe547204fca1da4be?apiKey=3eaf368fadc34ce186c057ae620a9503&"
                  className="aspect-square object-contain object-center w-8 overflow-hidden self-stretch shrink-0 max-w-full"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a9fe72d27c7ef04bfa361d22f7cf8998c1a35eafc015bcd6b3c09f978422900d?apiKey=3eaf368fadc34ce186c057ae620a9503&"
                  className="aspect-square object-contain object-center w-[26px] overflow-hidden shrink-0 max-w-full my-auto"
                />
              </div>
            </div>
          </nav>

          {/* </div> */}
          <nav
            id="m-nav"
            className="flex flex-col items-end pt-2 w-full self-start lg:hidden"
          >
            {/* Mobile Navigation */}
            <div
              id="mobile-nav"
              className="hidden flex-col justify-center bg-nav1 text-primaryLight font-sans tracking-wide w-full lg:hidden"
            >
              <MobileNav navigation={mobileNavigation} />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
