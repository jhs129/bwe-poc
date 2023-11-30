const content = {
  "results": [
    {
      "lastUpdatedBy": "YKRZYQ4lx5hVipxOABWD0DaLFRZ2",
      "folders": [],
      "data": {
        "group": [
          {
            "level1": [
              {
                "text": "About Hackensack Meridian Health",
                "level2": [
                  {
                    "src": "/about",
                    "title": "About Us"
                  },
                  {
                    "src": "/classes",
                    "title": "Classes and Events"
                  },
                  {
                    "src": "/social",
                    "title": "Social Media"
                  },
                  {
                    "src": "/contactus",
                    "title": "Contact Us"
                  },
                  {
                    "src": "/communityresources",
                    "title": "Community Resources"
                  },
                  {
                    "src": "/financialstatements",
                    "title": "Financial Statements"
                  },
                  {
                    "src": "/patientsandvisitors",
                    "title": "Patients and Visitors"
                  },
                  {
                    "src": "/privacypolicy",
                    "title": "Privacy Policy"
                  },
                  {
                    "src": "/terms",
                    "title": "Terms & Conditions"
                  },
                  {
                    "src": "/pfs",
                    "title": "Patient Financial Services"
                  },
                  {
                    "src": "/nondiscrimination",
                    "title": "Nondiscrimination Policy"
                  },
                  {
                    "src": "/newsroom",
                    "title": "Newsroom"
                  }
                ]
              }
            ]
          },
          {
            "level1": [
              {
                "text": "Careers",
                "level2": [
                  {
                    "src": "/careers",
                    "title": "Careers"
                  },
                  {
                    "src": "/careers/nursing",
                    "title": "Nursing Careers"
                  },
                  {
                    "src": "/careers/physicians",
                    "title": "Physician Careers"
                  }
                ]
              },
              {
                "text": "For Providers",
                "level2": [
                  {
                    "src": "/maestro",
                    "title": "Maestro"
                  }
                ]
              }
            ]
          },
          {
            "level1": [
              {
                "text": "For Team Members",
                "level2": [
                  {
                    "src": "/team/currrent",
                    "title": "Current Team Members"
                  },
                  {
                    "src": "/eap",
                    "title": "Employee Assistance Program"
                  },
                  {
                    "src": "/team/new",
                    "title": "New Team Members"
                  },
                  {
                    "src": "/team/login",
                    "title": "Team Member Login"
                  }
                ]
              }
            ]
          },
          {
            "level1": [
              {
                "text": "For Employers",
                "level2": [
                  {
                    "src": "/solutions/employers",
                    "title": "Employers Solutions"
                  }
                ]
              }
            ]
          }
        ]
      },
      "modelId": "e8de6bac5f8842bd95d4d4919b02842e",
      "query": [],
      "published": "published",
      "firstPublished": 1700745864753,
      "testRatio": 1,
      "lastUpdated": 1700745864761,
      "createdDate": 1700745248528,
      "createdBy": "YKRZYQ4lx5hVipxOABWD0DaLFRZ2",
      "meta": {
        "kind": "data",
        "lastPreviewUrl": ""
      },
      "variations": {},
      "name": "footer-navigation",
      "id": "510f5b0e03c14a6a8f405d6c7a31c258",
      "rev": "0h1k63l2clt"
    }
  ]
}

const socialLinks = {
    "results": [
      {
        "lastUpdatedBy": "YKRZYQ4lx5hVipxOABWD0DaLFRZ2",
        "folders": [],
        "data": {
          "links": [
            {
              "src": "https://twitter.com/johnhschneider",
              "network": "twitter"
            },
            {
              "src": "https://www.linkedin.com/company/jhs-digital-consulting/",
              "network": "linkedin"
            }
          ]
        },
        "modelId": "7a540af8c81f4dddbf1c979497aa984b",
        "query": [],
        "published": "published",
        "firstPublished": 1700744618993,
        "testRatio": 1,
        "lastUpdated": 1700744619016,
        "createdDate": 1700744477103,
        "createdBy": "YKRZYQ4lx5hVipxOABWD0DaLFRZ2",
        "meta": {
          "kind": "data",
          "lastPreviewUrl": ""
        },
        "variations": {},
        "name": "hmh-social-links",
        "id": "8ef5fc4332e94893b0f3c080a4c91dc2",
        "rev": "cpxosh6jjls"
      }
    ]
  }

  export function getDefaultContent() {
    return content.results[0].data;
  }

  export function getDefaultSocialLinks() {
    return socialLinks.results[0].data;
  }
  