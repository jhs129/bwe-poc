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
    <div className="bg-primaryDark">
      <footer className="p-4 flex flex-row mx-auto space-x-8">
        <div id="logo" className="flex flex-col">
          <Image
            src="/images/bwe-logo-white.webp"
            alt="Logo"
            width={150}
            height={65}
          />
          <div id="social-nav" className="flex flex-row space-x-2 pt-2">
            {socialLinks.links.map((item, index) => (
              <div id="level-2" key={index}>
                <Link
                  className={`p-2 text-white dark:hover:text-secondaryDark hover:text-secondaryAccent fa-brands fa-xs fa-${item.network.toLowerCase()}`}
                  href={item.src}
                  aria-label={item.network}
                ></Link>
              </div>
            ))}
          </div>
        </div>

        <div id="non-social-nav"
          className="flex flex-col md:flex-row md:justify-between"
        >
          {navItems.group.map((group, index) => (
            <div className="mt-0" key={index}>
              {group.level1.map((level1, index2) => (
                <div className="mt-0 space-y-2" key={index2}>
                  <div className="text-primaryLight text-[12px] font-sans">{level1.text}</div>
                  <ul className="list-image-none">
                    {level1?.level2 &&
                      level1.level2.map((item2, index3) => (
                        <li className="list-image-none" key={index3}>
                          <Link
                            className="text-xs text-primaryLight hover:text-secondaryAccent"
                            href={item2.src}
                          >
                            {item2.title}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div
          id="copyright"
          className="hidden flex-row mt-8 text-xs text-white mx-auto gap-4"
        >
          <div>{copyright}</div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
