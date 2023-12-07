
import React, { useState } from "react";
import { getDefaultContent } from "./mobile-nav.content";
import Link from "next/link";



function MobileNav(props) {

  let content = getDefaultContent();
  if (props?.navigation) {
    content = props.navigation;
  }
  const [expandedItems, setExpandedItems] = useState([]);

  const handleItemClick = (index) => {
    if (expandedItems.includes(index)) {
      setExpandedItems(expandedItems.filter((item) => item !== index));
    } else {
      setExpandedItems([...expandedItems, index]);
    }

    const col1 = document.querySelectorAll(`.col1-index-${index}`);
    col1.forEach((element) => {
      element.classList.toggle("open");
    });

    const col2 = document.querySelectorAll(`.col2-index-${index}`);
    col2.forEach((element) => {
      element.classList.toggle("open");
    });

    const col3 = document.querySelectorAll(`.col3-index-${index}`);
    col3.forEach((element) => {
      element.classList.toggle("open");
    });
  };

  let navContent;
  if (props.content) {
    navContent = props.content;
  } else {
    navContent = content;
  }

  return (
      <>
        {content.group[0].level1.map((item, index) => (
          <div
            nav-type="level-1"
            key={index}
            className={`flex flex-col w-full text-base font-bold leading-44 h-${
              expandedItems.includes(index) ? "auto" : "11"
            }`}
            onClick={() => handleItemClick(index)}
          >
            <div className="flex flex-row w-full">
              <div className={`block hamburger-row col1-index-${index} w-[10%]`}></div>
              <div
                className={`flex w-[80%] justify-center hamburger-row col2-index-${index} w-[80%] text-center`}
              >
                <div className={`hamburger-row col2-index-${index}`}>
                  {item?.src ? <Link className="text-primaryLight" href={item.src}>{item.text}</Link> : `${item.text}` }
                </div>
              </div>

              <div className={`hamburger-row col3-index-${index} h-11 w-[10%]`}>
                {item.level2 && (
                  <div className={`hamburger-row col3-index-${index} text-white`}>
                    <i aria-hidden
                       className={`fa-solid fa-chevron-down text-white ${
                        expandedItems.includes(index) ? "fa-rotate-180" : ""
                      }`}
                    ></i>
                  </div>
                )}
              </div>
            </div>

            {item.level2 && expandedItems.includes(index) && (
              <div nav-type="level-2" className="flex flex-col mx-auto h-auto">
                {item.level2.map((subItem, subIndex) => (
                  <div className="font-light text-center h-11" key={subIndex}>
                   <Link className="text-primaryLight" href={subItem.src}>{subItem.text}</Link>
                  </div>
                ))}
              </div>
            )}
          </div>

      ))}
      </>
  );
}

export default MobileNav;
