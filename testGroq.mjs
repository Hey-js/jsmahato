import { createClient } from "@sanity/client";
const client = createClient({
  projectId: "91nt6co0",
  dataset: "production",
  useCdn: false,
  apiVersion: "2024-03-10",
});
const query = `*[_type == "project"] | order(sortOrder asc) {
  _id, title, "slug": slug.current, description, technologies, featured, coverImage, screenshots, githubUrl, liveUrl
}`;
client
  .fetch(query)
  .then((res) => console.log(JSON.stringify(res, null, 2)))
  .catch(console.error);
