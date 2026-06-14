import { createClient } from "@sanity/client";
const client = createClient({
  projectId: "91nt6co0",
  dataset: "production",
  useCdn: false,
  apiVersion: "2024-03-10",
});
client.fetch('*[_type=="project"]').then(console.log).catch(console.error);
