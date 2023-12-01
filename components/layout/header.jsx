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
    <div id="header" className="bg-primaryLight">
      <header className="px-4 pt-8 md:py-4">
        <div className="flex gap-4 max-md:flex-wrap">
          {/* Logo and Hamburger Menu - Layer 1 */}
          <div
            id="top-row"
            className="flex md:flex-row w-full md:w-80 justify-between"
          >
            {/* Logo Image */}
            <div
              id="logo"
              className="flex pt-4 mx-auto md:mx-0 bg-primaryLight"
            >
              <Link href="/">
                <Image
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
              className="absolute right-0 top-6 md:flex md:items-center md:justify-end bg-primaryLight"
            >
              <button
                id="menu-btn"
                aria-label="hamburger menu"
                className={`block md:hidden hamburger bg-primaryLight hover:bg-primaryLight focus:outline-none ${
                  isOpen ? "open hover:bg-nav1" : ""
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
          <div
            id="nav"
            className="flex flex-col items-end pt-4 w-full self-start md:max-w-full"
          >
            {/* Navigation */}
            <nav>
              {/* Desktop Navigation */}

              <div id="desktop-nav" className="hidden md:flex md:flex-row">
                <div className="flex flex-wrap w-1/3 space-x-6 border-r-2 border-nav1 items-center pr-8 justify-end">
                  {navigation.group[0].level1.map((item, index) => (
                    <Link
                      key={index}
                      href={item.src}
                      className="text-xs leading-6 self-start capitalize text-secondaryDark hover:text-secondaryDark font-bold"
                      aria-label={item.text}
                    >
                      {item.text}
                    </Link>
                  ))}
                </div>
                <div className="flex p-4">
                  <span className="text-bgs text-xs font-bold py-2">
                    Find a Representative
                  </span>
                  <Link href="#">
                    {" "}
                    <i class="fa-solid fa-chevron-right fa-sm text-bgs px-4"></i>
                  </Link>
                </div>
                <div className="mx-auto w-full justify-end md:w-80 md:m-0 p-4">
                  <div className="flex flex-row border w-full justify-items-stretch border-solid border-bgs rounded-lg text-white">
                    <input
                      type="text"
                      className="bg-white w-5/6 flex flex-col text-gray-400 px-2 py-0 font-base font-sm font-secondary placeholder-gray-400 placeholder:font-thin placeholder:text-sm  rounded-lg border-none"
                      aria-label="Search"
                      placeholder="Search"
                    >
                    </input>

                    <div className="bg-bgs w-1/6 justify-center border-none rounded-l-none rounded-r-lg">
                      <i class="fa-solid fa-magnifying-glass px-2"></i>
                    </div>
                  </div>
                </div>
              </div>
              {/* Mobile Navigation */}
              <div
                id="mobile-nav"
                className="hidden flex-col bg-nav1 text-primaryLight font-sans tracking-wide mx-auto md:hidden"
              >
                <MobileNav />
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
