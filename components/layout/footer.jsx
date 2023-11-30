import { getDefaultContent } from "./footer.content";
import { getDefaultSocialLinks } from "./footer.content";
import Link from "next/link";

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
    copyright = "© 2023 JHS Digital Consulting, LLC";
  } else {  
    copyright = props.copyright;
  }

  function getSocialIcons(name) {
    switch (name.toLowerCase) {
      case "facebook":
        return "social-icon social-icon-facebook";
      case "twitter":
        return "social-icon social-icon-twitter";
      case "youtube":
        return "social-icon social-icon-youtube";
      case "instagram":
        return "social-icon social-icon-instagram";
      case "linkedin":
        return "social-icon social-icon-linkedin";
      case "threads":
        return "social-icon social-icon-threads";
      case "tiktok":
        return "social-icon social-icon-tiktok";
      default:
        return "social-icon";
    }
  }

  return (
    <div className="bg-primaryDark">
    <footer className="site-container flex flex-col mx-auto">
      <div className="px-0"><h3 className="text-white">Follow Us on Social</h3></div>
      <div id="social-nav" className="flex flex-row space-x-2">
        {socialLinks.links.map((item, index) => (
          <div
            id="level-2"
            // className="bg-primaryAccent h-8 w-8 rounded-full"
            key={index}
          >
            <Link
              className={`p-4 text-white dark:hover:text-secondaryDark hover:text-secondaryAccent social-icon social-icon-${item.network.toLowerCase()}`}
              href={item.src} aria-label={item.network}
            ></Link>
          </div>
        ))}
      </div>
{/* 
      <div id="non-social-nav" className="flex flex-col md:flex-row md:justify-between">
        {navItems.group.map((group, index) => (
          <div className="mt-6" key={index}>
            {group.level1.map((level1, index2) => (
              <div className="mt-4"key={index2}>
                <h6>{level1.text}</h6>
                <ul>
                  {level1.level2.map((item2, index3) => (
                    <li key={index3}>
                      <Link
                        className="text-xs text-primaryAccent hover:text-secondaryAccent underline"
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
 */}
      <div id="copyright" className="flex flex-row mt-8 text-xs text-white mx-auto gap-4">
        <div >{copyright}</div><div>|</div>
        <div><Link className=" text-primaryLight hover:text-secondaryDark" href="/privacy-policy">Privacy Policy</Link></div>
      </div>
    </footer>
    </div>
  );
}

export default Footer;
           
       