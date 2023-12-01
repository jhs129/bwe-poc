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
  };

  return (

    <div className="bg-primaryLight">
      <header className="site-container pt-8 md:py-4 bg-primaryLight">

       
        <div className="flex gap-4 max-md:flex-wrap">

           {/* Logo and Hamburger Menu - Layer 1 */}
          <div  id="logo"
            className="flex flex-row w-full md:w-80 justify-between"
          >
            {/* Logo Image */}
            <div className="flex bg-primaryLight mx-auto">
              <Link href="/">
                <Image src={logoImage} alt="Logo Image" width={100} height={40} className="rounded-none shadow-none"/>
              </Link>
            </div>

            {/*  Hamburger Button */}
            <div className="flex items-center justify-end bg-primaryLight">
              <button
                id="menu-btn"
                aria-label="hamburger menu"
                className={`block md:hidden hamburger  hover:bg-primaryLight focus:outline-none ${
                  isOpen ? "open" : ""
                }`}
                type="button"
                onClick={() => {
                  toggleOpen();
                  toggleMenu();
                }}
              >
                <div className="flex flex-col">
                <span  className="hamburger-top"></span>
                <span className="mt-1 hamburger-middle"></span>
                <span className="mt-2 hamburger-bottom"></span>
                </div>
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div id="nav"
            className="flex flex-col items-center pt-4 w-full self-start md:max-w-full md:items-end"
          >
            {/* Navigation */}
            <nav>


              {/* Desktop Navigation */}
              <div  id="desktop-nav"
                className="hidden md:flex  self-stretch bg-items-end justify-between gap-5 mt-4 max-md:max-w-full max-md:flex-wrap max-md:justify-center"
              >
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

              {/* Mobile Navigation */}
              <div  id="mobile-nav" 
                    className="hidden flex-col bg-nav1 text-primaryLight font-sans tracking-wide mx-auto">

              <MobileNav/>
              </div>

            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
