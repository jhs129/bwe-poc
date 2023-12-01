import { Builder } from "@builder.io/react";
import dynamic from "next/dynamic";

Builder.registerComponent(
  dynamic(() => import("./components/ui/youtube")),
  {
    name: "Youtube Embed",
    inputs: [
      {
        name: "videoId",
        type: "text",
      },
    ],
  }
);
//const { image, height, width, altText,lazyLoad } = props;

Builder.registerComponent(
  dynamic(() => import("./components/ui/next-image")),
  {
    name: "NextJS Image",
    inputs: [
      { name: "image", type: "file" },
      { name: "height", type: "number", defaultValue: 500 },
      { name: "width", type: "number", defaultValue: 500 },
      { name: "altText", type: "text", defaultValue: "alt text" },
      {
        name: "lazyLoad",
        type: "text",
        defaultValue: "lazy",
        enum: [
          { label: "lazy", value: "lazy" },
          { label: "eager", value: "eager" },
        ],
      },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Counter/Counter")),
  {
    name: "Counter",
  }
);
