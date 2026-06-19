
import { createImageUrlBuilder } from "@sanity/image-url";
import { fetchSanity } from "./sanity.server";

const builder = createImageUrlBuilder({
  projectId: "91nt6co0",
  dataset: "production",
});

export const sanityClient = {
  fetch: async (query: string, params?: any) => {
    return await fetchSanity({ data: { query, params } });
  }
};

export function urlFor(source: any) {
  return builder.image(source);
}
