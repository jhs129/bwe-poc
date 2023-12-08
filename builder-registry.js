import { Builder, withChildren } from "@builder.io/react";
import dynamic from "next/dynamic";

Builder.registerComponent(
  dynamic(() => import("./components/ui/hero")),
  {
    name: "Hero",
    inputs: [
      { name: 'desktopImage', type: 'file', friendlyName: 'Desktop Image' },
      { name: 'mobileImage', type: 'file', friendlyName: 'Mobile Image' },
      { name: 'title', type: 'string', defaultValue: 'Enter Title Here' },
      { name: 'body', type: 'richText', defaultValue: 'Enter Body Here' },
      { name: 'buttonLabel', type: 'string', defaultValue: 'Click Me' },
      { name: 'buttonUrl', type: 'string', defaultValue: '#' },
    ],
  }
);

Builder.registerComponent(
withChildren(
  dynamic(() => import("./components/ui/card-section"))
),
{
  name: "Card Section",
  childRequirements: {
    message: "You can only put in Card components",
    query: {
      "component.name": { $in: ["Card"] },
    },
  },
  inputs: [
    {
      name: "headline",
      type: "text",
      defaultValue: "[Default Headline]",
    },
  ],
}
);

Builder.registerComponent(
  dynamic(() => import("./components/ui/card")),
  {
    name: "Card",
    inputs: [
      { name: 'title', type: 'string', defaultValue: 'Enter Title Here' },
      { name: 'body', type: 'richText', defaultValue: 'Enter Body Here' },
      { name: 'linkText', type: 'string', defaultValue: 'Click Me' },
      { name: 'linkUrl', type: 'string', defaultValue: '#' },
    ],
  }
);