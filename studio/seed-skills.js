const { createClient } = require("@sanity/client");

// NOTE: You MUST provide a write-enabled token to insert data.
// You can create one at https://manage.sanity.io/projects/91nt6co0/api
const token = process.env.SANITY_API_TOKEN;

if (!token) {
  console.error("❌ Error: SANITY_API_TOKEN is missing.");
  console.error("Usage: SANITY_API_TOKEN=your_token node seed-skills.js");
  process.exit(1);
}

const client = createClient({
  projectId: "91nt6co0",
  dataset: "production",
  useCdn: false,
  apiVersion: "2024-01-01",
  token: token,
});

const skills = [
  // Frontend
  { name: "React", category: "Frontend", order: 1 },
  { name: "TypeScript", category: "Frontend", order: 2 },
  { name: "JavaScript", category: "Frontend", order: 3 },
  { name: "HTML5", category: "Frontend", order: 4 },
  { name: "CSS3", category: "Frontend", order: 5 },
  { name: "Tailwind CSS", category: "Frontend", order: 6 },

  // Backend
  { name: "Node.js", category: "Backend", order: 7 },
  { name: "Express.js", category: "Backend", order: 8 },
  { name: "Java", category: "Backend", order: 9 },
  { name: "REST APIs", category: "Backend", order: 10 },

  // Databases
  { name: "MongoDB", category: "Databases", order: 11 },
  { name: "PostgreSQL", category: "Databases", order: 12 },
  { name: "Firebase", category: "Databases", order: 13 },

  // Cloud & Deployment
  { name: "Cloudinary", category: "Cloud & Deployment", order: 14 },
  { name: "Vercel", category: "Cloud & Deployment", order: 15 },
  { name: "Railway", category: "Cloud & Deployment", order: 16 },

  // Development Tools
  { name: "Git", category: "Development Tools", order: 17 },
  { name: "GitHub", category: "Development Tools", order: 18 },
  { name: "VS Code", category: "Development Tools", order: 19 },

  // Currently Learning
  { name: "Cloud Computing", category: "Currently Learning", order: 20 },
  { name: "AWS", category: "Currently Learning", order: 21 },
  { name: "DevOps Fundamentals", category: "Currently Learning", order: 22 },
];

async function seedSkills() {
  console.log("Starting bulk import of skills...");

  const transaction = client.transaction();

  skills.forEach((skill) => {
    transaction.create({
      _type: "skill",
      name: skill.name,
      category: skill.category,
      order: skill.order,
      // proficiency level wasn't requested, but we can set a default if needed by the schema
      proficiency: 80,
    });
  });

  try {
    const res = await transaction.commit();
    console.log(`✅ Successfully seeded ${res.results.length} skills!`);
  } catch (err) {
    console.error("❌ Failed to seed skills:");
    console.error(err.message);
  }
}

seedSkills();
