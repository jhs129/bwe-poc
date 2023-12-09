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

Builder.registerComponent(
  dynamic(() => import("./components/ui/color-card")),
  {
    name: "Color Card",
    inputs: [
      { name: 'title', type: 'string', defaultValue: 'Title' },
      { name: 'body', type: 'longText', defaultValue: 'Enter Body Here' },
      { name: 'color', type: 'color', defaultValue: 'rgba(210,241,147,100)' },
      { name: 'textColor', type: 'string', defaultValue: 'Dark',
      enum: [
        { label: "Dark", value: "text-black" },
        { label: "Light", value: "text-white" },
      ],
    }
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/ui/person-card")),
  {
    name: "Person Card",
    inputs: [
      { name: 'name', type: 'string', defaultValue: '[fname lname]' },
      { name: 'title', type: 'string', defaultValue: '[title]' },
      { name: 'image', type: 'file' },
      { name: 'blurb', type: 'longText', defaultValue: '[enter bio here]' },
    ],
  }
);


