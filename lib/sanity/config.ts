export const projectId = "8t2ppr8u";
export const dataset = "production";

// Always enable CDN
export const useCdn = true;

export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-03-25";

export const previewSecretId = process.env.SANITY_REVALIDATE_SECRET as string;
