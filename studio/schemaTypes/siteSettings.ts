export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Site Title",
      type: "string",
    },
    {
      name: "description",
      title: "Site Description",
      type: "text",
    },
    {
      name: "email",
      title: "Contact Email",
      type: "string",
    },
    {
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "platform", type: "string", title: "Platform (e.g. Github)" },
            { name: "url", type: "url", title: "URL" },
          ],
        },
      ],
    },
    {
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "resumeFile",
      title: "Resume File",
      type: "file",
    },
    {
      name: "linkedinUrl",
      title: "LinkedIn URL",
      type: "url",
    },
    {
      name: "githubUrl",
      title: "GitHub URL",
      type: "url",
    },
    {
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
    },
    {
      name: "heroSubtitle",
      title: "Hero Subtitle",
      type: "string",
    },
    {
      name: "availabilityText",
      title: "Availability Text",
      type: "string",
    },
  ],
};
