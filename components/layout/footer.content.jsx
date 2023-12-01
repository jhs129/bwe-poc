const content = {
  "results": [
    {
      "lastUpdatedBy": "YKRZYQ4lx5hVipxOABWD0DaLFRZ2",
      "folders": [],
      "data": {
        "group": [
          {
            "level1": [
              { "text": "COOKIE POLICY", src: "/cookie-policy" },
              { "text": "DISCLAIMER", src: "/cookie-policy" },
              { "text": "PRIVACY POLICY",  src: "/cookie-policy" },
              { "text": "TERMS OF USE", src: "/cookie-policy" },
              { "text": "info@bwecap.com", src: "mailto:info@bwecap.com" },
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
              "src": "https://www.linkedin.com/company/bellwether-enterprise-real-estate-capital/",
              "network": "linkedin"
            },
            {
              "src": "https://www.facebook.com/Bellwether-Enterprise-467856173295110/",
              "network": "facebook-f"
            },   
            {
              "src": "https://www.youtube.com/channel/UCW0c6VXiiD_NSgNwwNqoZfw",
              "network": "youtube"
            },
            {
              "src": "https://www.instagram.com/bellwether_enterprise/",
              "network": "instagram"
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
  