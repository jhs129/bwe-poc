import React, { useState } from "react";

const content = [
  {
    label: "Available Properties",
    link: "https://www.bwe.com",
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
  };

  let navContent;
  if (props.content) {
    navContent = props.content;
  } else {
    navContent = content;
  }

  return (
    <div className="flex flex-col bg-nav1 text-primaryLight text-sm font-bold mx-auto">
      {navContent.map((item, index) => (
        <div
          nav-type="level-1"
          key={index}
          className={`flex flex-row h-${
            expandedItems.includes(index) ? "auto" : "11"
          }`}
          onClick={() => handleItemClick(index)}
        >
          <div className="w-10"></div>
          <div className="w-60 text-center">{item.label} </div>
            <div className="w-10">
              {item.subItems && (
                <span className="ml-2 hamburger-submenu">
                  {/* {expandedItems.includes(index) ? ">" : "V"} */}
                </span>
              )}
            </div>
         
          {item.subItems && expandedItems.includes(index) && (
            <div nav-type="level-2" className="flex flex-col ml-2.5 h-auto">
              {item.subItems.map((subItem, subIndex) => (
                <div className="font-normal h-11" key={subIndex}>
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
