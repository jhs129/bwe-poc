import Image from "next/image";
import React, { useState } from "react";

const content = [
  {
    label: "Mortgage Banking",
    subItems: [
      {
        label: "Property Types",
        link: "https://www.bwe.com/weekly-rates",
      },
      {
        label: "Finance Options",
        link: "https://www.bwe.com/affordable-rates",
      },
    ],
  },
  {
    label: "Investment Sales",
    subItems: [
      {
        label: "Available Properties",
        link: "https://www.bwe.com",
      },
    ],
  },

  {
    label: "Locations",
    link: "https://www.bwe.com/locations",
  },
  {
    label: "Rates",
    subItems: [
      {
        label: "Market Rate",
        link: "https://www.bwe.com/weekly-rates",
      },
      {
        label: "Affordable Multifamily",
        link: "https://www.bwe.com/affordable-rates",
      },
    ],
  },
  {
    label: "About",
    subItems: [
      {
        label: "Culture",
        link: "https://www.bwe.com/ourpeople",
      },
      {
        label: "DE&I",
        link: "https://www.bwe.com/dei",
      },
      {
        label: "Rankings",
        link: "https://www.bwe.com/rankings",
      },
      {
        label: "Board of Directors",
        link: "https://www.bwe.com/board-of-directors",
      },
      {
        label: "Corporate Leadership",
        link: "https://www.bwe.com/leadership",
      },
      {
        label: "Production Leadership",
        link: "https://www.bwe.com/production-leadership",
      },
    ],
  },
  {
    label: "Careers",
    link: "https://www.bwe.com/careers",
  },
  {
    label: "Insights",
    link: "https://www.bwe.com/blog",
  },
  {
    label: "Capital Markets",
    link: "https://www.bwe.com/capitalmarkets",
  },
];

function MobileNav2(props) {
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
    <div className="flex flex-col bg-nav1 text-primaryLight font-sans tracking-wide mx-auto">
      {navContent.map((item, index) => (
        <div
          nav-type="level-1"
          key={index}
          className={`flex flex-col text-base font-bold leading-44 h-${
            expandedItems.includes(index) ? "auto" : "11"
          }`}
          onClick={() => handleItemClick(index)}
        >
          <div className="flex flex-row">
            <div className={`hamburger-row col1-index-${index} w-16`}></div>
            <div
              className={`hamburger-row col2-index-${index} w-60 text-center`}
            >
              <div className={`hamburger-row col2-index-${index}`}>
                {item.label}
              </div>
            </div>

            <div className={`hamburger-row col3-index-${index} h-11 w-10`}>
              {item.subItems && (
                <div className={`hamburger-row col3-index-${index} text-white`}>
                  <i
                    class={`fa-solid fa-chevron-down text-white ${
                      expandedItems.includes(index) ? "fa-rotate-180" : ""
                    }`}
                  ></i>
                </div>
              )}
            </div>
          </div>

          {item.subItems && expandedItems.includes(index) && (
            <div nav-type="level-2" className="flex flex-col mx-auto h-auto">
              {item.subItems.map((subItem, subIndex) => (
                <div className="font-light text-center h-11" key={subIndex}>
                  {subItem.label}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default MobileNav2;
