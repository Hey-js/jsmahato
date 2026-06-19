import { createServerFn } from "@tanstack/react-start";

export const fetchSanity = createServerFn({ method: "GET" })
  .validator((data: { query: string; params?: Record<string, any> }) => data)
  .handler(async ({ data }) => {
    const { createClient } = await import("@sanity/client");
    const sanityClient = createClient({
      projectId: "91nt6co0",
      dataset: "production",
      apiVersion: "2024-01-01",
      useCdn: false,
    });
    return await sanityClient.fetch(data.query, data.params || {});
  });
