import { useState } from "react";
import { getDefaultContent } from "./header.content";
import Link from "next/link";
import Image from "next/image";

function Header(props) {
  const [isOpen, setIsOpen] = useState(false);

  let navigation;
  if (!props.navigation) {
    navigation = getDefaultContent();
  } else {
    navigation = props.navigation;
  }

  let logoImage = "/images/logo-blue.png";
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
    <div className="bg-primaryDark">
      <header className="site-container pt-8 md:py-4 bg-primaryDark">
        <div className="flex gap-4 max-md:flex-wrap">
          <div
            id="logo"
            className="flex flex-row w-full md:w-80 justify-between"
          >
            {/* Logo Image */}
            <div className="flex bg-primaryDark">
              <Link href="/">
                <Image src={logoImage} alt="JHS Digital Consulting Logo" width={500} height={200} />
              </Link>
            </div>

            {/*  Hamburger Button */}
            <div className="flex items-center justify-end bg-primaryDark">
              <button
                id="menu-btn"
                aria-label="hamburger menu"
                className={`block md:hidden hamburger  hover:bg-primaryDark focus:outline-none ${
                  isOpen ? "open" : ""
                }`}
                type="button"
                onClick={() => {
                  toggleOpen();
                  toggleMenu();
                }}
              >
                <span  className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
              </button>
            </div>
          </div>

          {/* Desktop Nav */}
          <div
            id="nav"
            className="flex flex-col items-center pt-4 w-full self-start md:max-w-full md:items-end"
          >
            {/* Navigation */}
            <nav>
              {/* Desktop Navigation */}

              <div
                id="desktop-nav"
                className="hidden md:flex  self-stretch bg-items-end justify-between gap-5 mt-4 max-md:max-w-full max-md:flex-wrap max-md:justify-center "
              >
                {navigation.group[0].level1.map((item, index) => (
                  <Link
                    key={index}
                    href={item.src}
                    className="text-2xl leading-6 self-start uppercase text-primaryAccent hover:text-secondaryDark font-thin"
                    aria-label={item.text}
                  >
                    {item.text}
                  </Link>
                ))}
              </div>

              {/* Mobile Navigation */}

              <div
                id="mobile-nav"
                className="hidden bg-primaryDark flex-col mx-auto items-start p-4 -mt-20 text-center md:hidden"
              >
                {navigation.group[0].level1.map((item, index) => (
                  <Link
                    key={index}
                    href={item.src}
                    className="p-2 tracking-widest w-full text-left uppercase text-primaryLight"
                    aria-label={item.text}
                  >
                    {item.text}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
