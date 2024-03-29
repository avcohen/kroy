import React from "react";
import { BiLinkExternal } from "react-icons/bi";

export default {
  name: "portableSimple",
  title: "Text",
  type: "array",
  of: [
    {
      type: "block",
      styles: [
        {
          title: "Normal",
          value: "normal",
          blockEditor: ({ children }) => <span>{children}</span>,
        },
      ],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Underline", value: "underline" },
          { title: "Strike", value: "strike-through" },
        ],
        annotations: [
          {
            title: "Link",
            name: "link",
            type: "object",
            fields: [
              {
                title: "External URL",
                name: "href",
                type: "url",
                media: BiLinkExternal,
                validation: (Rule) => Rule.uri({ scheme: ["http", "https"] }).required(),
              },
            ],
          },
        ],
      },
    },
  ],
};
