import { getDefaultContent } from "./footer.content";
import { getDefaultSocialLinks } from "./footer.content";
import Link from "next/link";
import Image from "next/image";

function Footer(props) {
  let navItems;
  if (!props.navigation) {
    navItems = getDefaultContent();
  } else {
    navItems = props.navigation;
  }

  let logo;
  if (!props.logo) {
    logo = "/images/bwe-logo-white.webp";
  } else {
    logo = props.logo;
  }

  let socialLinks;
  if (!props.socialLinks) {
    socialLinks = getDefaultSocialLinks();
  } else {
    socialLinks = props.socialLinks;
  }

  let copyright;
  if (!props?.copyright) {
    copyright = "© 2023 Bellwether Enterprise Real Estate Capital LLC";
  } else {
    copyright = props.copyright;
  }

  function getSocialIcons(name) {
    switch (name.toLowerCase) {
      case "facebook":
        return "fa-brands fa-facebook-f";
      case "twitter":
        return "fa-brands fa-x-twitter";
      case "youtube":
        return "fa-brands fa-youtube";
      case "instagram":
        return "fa-brands fa-instagram";
      case "linkedin":
        return "fa-brands fa-linkedin";
      case "threads":
        return "fa-brands fa-threads";
      case "tiktok":
        return "fa-brands fa-tiktok";
      default:
        return "social-icon";
    }
  }

  return (
    <footer className="bg-primaryDark">
      <div className="p-4 flex flex-col">
        <div className="flex flex-col-reverse md:flex-row space-x-8">
          <nav
            id="footer-nav"
            className="grid grid-cols-2 w-full gap-4 md:flex md:flex-row md:justify-between md:space-x-8 md:space-y-0  text-white text-xs font-light leading-5 md:w-10/12"
          >
            <div id="logo-social" className="hidden md:flex md:flex-col">
              <Image src={logo} alt="Logo" width={150} height={65} />
              <div
                id="social-nav"
                className="flex flex-col space-x-2 pt-2 text-white dark:hover:text-secondaryDark hover:text-secondaryAccent"
              >
                <div className=" text-white text-xs font-light leading-5 w-full">
                  Follow Us
                </div>
                <div className="flex flex-row space-x-2 items-end">
                  {socialLinks.links.map((item, index) => (
                    <div id="level-2" key={index}>
                      <Link
                        className={`${
                          index === 0 ? "-ml-2" : ""
                        } text-white dark:hover:text-secondaryDark hover:text-secondaryAccent fa-brands fa-xs fa-${item.network.toLowerCase()}`}
                        href={item.src}
                        aria-label={item.network}
                      ></Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {navItems.group.map((group, index) => (
              <div className="flex flex-col md:flex-row mt-0" key={index}>
                {group.level1.map((level1, index2) => (
                  <div className="mt-0 space-y-1" key={index2}>
                    <div className="text-primaryLight text-sm font-medium leading-5 font-primary">
                      {level1.text}
                    </div>
                    <ul className="list-image-none">
                      {level1?.level2 &&
                        level1.level2.map((item2, index3) => (
                          <li
                            className="list-none list-image-none mb-2"
                            key={index3}
                          >
                            <Link
                              className="text-sm font-thin text-primaryLight hover:text-secondaryLight"
                              href={item2.src}
                            >
                              {item2.text}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
            <div id="logo-social1" className="flex flex-col md:hidden">
              <Image src={logo} alt="Logo" width={150} height={65} />
              <div
                id="social-nav"
                className="flex flex-col space-x-2 pt-2 text-white dark:hover:text-secondaryDark hover:text-secondaryAccent"
              >
                <div className=" text-white text-xs font-light leading-5 w-full">
                  Follow Us
                </div>
                <div className="flex flex-row space-x-2 items-end">
                  {socialLinks.links.map((item, index) => (
                    <div id="level-2" key={index}>
                      <Link
                        className={`${
                          index === 0 ? "-ml-2" : ""
                        } text-white dark:hover:text-secondaryDark hover:text-secondaryAccent fa-brands fa-lg md:fa-xs fa-${item.network.toLowerCase()}`}
                        href={item.src}
                        aria-label={item.network}
                      ></Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div id="legal-nav" className="flex flex-col md:flex-row gap-4">
          <div className="text-secondaryLight text-xs font-light leading-5 pr-8">
            © 2023 BWE
          </div>
          <div className="items-stretch self-stretch flex justify-between gap-5">
            <div className="items-stretch flex gap-4 max-md:justify-center">
              <a
                href="#"
                className="text-secondaryLight text-xs font-light leading-5 whitespace-nowrap"
              >
                Terms of Use
              </a>
              <a
                href="#"
                className="text-zinc-400 text-xs font-light leading-5"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-zinc-400 text-xs font-light leading-5 whitespace-nowrap"
              >
                Cookie Policy
              </a>
            </div>
            <div className="text-zinc-400 text-xs font-light leading-5 grow whitespace-nowrap">
              Disclaimer
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
