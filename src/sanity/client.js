import { createClient } from "@sanity/client";

export default createClient({
  projectId: "8mibvour",
  dataset: "production",
  apiVersion: "2024-06-14",
  // Set to `true` for production environments
  useCdn: false,
});
