import { sanityClient } from "@/lib/sanity";
import { useQuery } from "@tanstack/react-query";
export function useActiveResume() {
  return useQuery({
    queryKey: ["active-resume"],
    queryFn: async () => {
      try {
        const data = await sanityClient.fetch(`*[_type == "siteSettings"][0]{
          "resumeFileUrl": resumeFile.asset->url
        }`);
        return data?.resumeFileUrl ? { file_url: data.resumeFileUrl, label: "Resume" } : null;
      } catch (error) {
        return null;
      }
    },
    staleTime: 60_000,
  });
}
