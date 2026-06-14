export default {
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    { name: "category", title: "Category", type: "string" },
    { name: "icon", title: "Icon (URL/String)", type: "string" },
    { name: "order", title: "Order", type: "number" },
  ],
};
