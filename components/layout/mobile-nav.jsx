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



function MobileNav(props) {
  return (
    <div>
    <nav className="flex flex-col bg-nav1 text-primaryLight text-sm font-bold items-start h-auto py-4  mx-auto text-center md:hidden">
        <ul className="relative shadow border-none mx-auto">
          {content.map((menuItem, index) => (
            <li
              key={index}
              data-testid={`MENU_AS_CONTAINER_EXPANDABLE_MENU-${index}`}
              className="list-none min-w-full h-11 text-center text-primaryLight"
            >
              <div id="itemWrapper" className="grid grid-cols-3">

                  <div className="w-20"></div>
                  <div>
                  <a
                    href="#"
                    target="_self"
                    className="h-11user-select-none text-primaryLight text-center nowrap hover:text-blue-500"
>
                    {menuItem.label}
                  </a>
                  </div>
                <div className="w-20">
                {menuItem.subItems && (
                  <button
                    aria-label={menuItem.label}
                    className="flex text-primaryLight h-11 bg-nav1 hover:bg-nav1"
                  >
                    <div className="min-w-[12px] mx-5 w-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 9.2828 4.89817"
                            className="align-top"
                            fill="white" // Set the fill color to white
                        >
                            <path d="M4.64116,4.89817a.5001.5001,0,0,1-.34277-.13574L.15727.86448A.50018.50018,0,0,1,.84282.136L4.64116,3.71165,8.44.136a.50018.50018,0,0,1,.68555.72852L4.98393,4.76243A.5001.5001,0,0,1,4.64116,4.89817Z"></path>
                        </svg>
                    </div>
                  </button>
                )}
                </div>
              </div>
              <div className="flex">
              {menuItem.subItems && (
                <ul className="flex flex-col">
                  {menuItem.subItems.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      data-testid={`MENU_AS_CONTAINER_EXPANDABLE_MENU-${index}-${subIndex}`}
                    className="flex flex-col border-none h-11"
                    >
                    <div className="flex h-11">
                        <ul className="flex flex-col text-primaryLight">
                            {menuItem.subItems.map((subItem, subIndex) => (
                                <li
                                    key={subIndex}
                                    data-testid={`MENU_AS_CONTAINER_EXPANDABLE_MENU-${index}-${subIndex}`}
                                    className="flex flex-col border-none text-primaryLight h-11 list-none"
                                >
                                    <a
                                        data-testid="linkElement"
                                        href="#"
                                        target="_self"
                                        className="flex flex-col text-primaryLight"
                                    >
                                        {subItem.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    </li>
                  ))}
                </ul>
              )}
              </div>


            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default MobileNav;
