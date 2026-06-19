import { T as TSS_SERVER_FUNCTION, c as createServerFn } from "./server-RvM7qVcp.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "async_hooks";
import "util";
import "crypto";
import "stream";
import "../_libs/isbot.mjs";
var createServerRpc = (serverFnMeta, splitImportFn) => {
  const url = "/_serverFn/" + serverFnMeta.id;
  return Object.assign(splitImportFn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const fetchSanity_createServerFn_handler = createServerRpc({
  id: "8f5c6d438bb42d34f78a3d40aabd00c8600598a6e046d3ca5d9b0eff21ab1c02",
  name: "fetchSanity",
  filename: "src/lib/sanity.server.ts"
}, (opts) => fetchSanity.__executeServer(opts));
const fetchSanity = createServerFn({
  method: "GET"
}).validator((data) => data).handler(fetchSanity_createServerFn_handler, async ({
  data
}) => {
  const {
    createClient
  } = await import("../_libs/sanity__client.mjs");
  const sanityClient = createClient({
    projectId: "91nt6co0",
    dataset: "production",
    apiVersion: "2024-01-01",
    useCdn: false
  });
  return await sanityClient.fetch(data.query, data.params || {});
});
export {
  fetchSanity_createServerFn_handler
};
