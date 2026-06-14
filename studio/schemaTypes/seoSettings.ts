export default {
  name: "seoSettings",
  title: "SEO Settings",
  type: "document",
  fields: [
    {
      name: "defaultTitle",
      title: "Default Title",
      type: "string",
    },
    {
      name: "defaultDescription",
      title: "Default Description",
      type: "text",
    },
    {
      name: "defaultImage",
      title: "Default Share Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
