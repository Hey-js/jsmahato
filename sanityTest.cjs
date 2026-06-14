const { createClient } = require("@sanity/client");

const client = createClient({
  projectId: "91nt6co0",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

async function run() {
  const data = await client.fetch(`*[_type == "siteSettings"][0]{
    heroTitle,
    heroSubtitle,
    description,
    availabilityText,
    "resumeFileUrl": resumeFile.asset->url
  }`);
  console.log("SANITY RESPONSE:");
  console.log(JSON.stringify(data, null, 2));
}

run().catch(console.error);
