export default {
  name: "personalProfile",
  title: "Personal Profile (About Page)",
  type: "document",
  fields: [
    {
      name: "fullName",
      title: "Full Name",
      type: "string",
    },
    {
      name: "headline",
      title: "Headline",
      type: "string",
    },
    {
      name: "shortBio",
      title: "Short Bio (Intro text)",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "longBio",
      title: "Long Bio (The Journey)",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "careerGoal",
      title: "Career Goal",
      type: "string",
    },
    {
      name: "education",
      title: "Education",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "degree", type: "string", title: "Degree / Certificate" },
            { name: "institution", type: "string", title: "Institution" },
            { name: "score", type: "string", title: "Score / CGPA" },
          ],
        },
      ],
    },
    {
      name: "interests",
      title: "Interests",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "languages",
      title: "Languages",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "currentlyLearning",
      title: "Currently Learning",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "projectsSummary",
      title: "Projects Summary",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", type: "string", title: "Project Name" },
            { name: "description", type: "text", title: "Short Description" },
          ],
        },
      ],
    },
  ],
};
