import { createClient } from "@sanity/client";

const sanityClient = createClient({
  projectId: "91nt6co0",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

async function run() {
  const data = await sanityClient.fetch(`*[_type == "photography"] | order(date desc) [0]`);
  console.log(JSON.stringify(data, null, 2));
}

run();
