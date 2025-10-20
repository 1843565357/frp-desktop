import { invoke } from "@tauri-apps/api/core";

export async function getFrpReleases(page = 1, perPage = 100) {
  return await invoke("fetch_frp_all_releases_version", { page, perPage });
}

// export async function getFrpReleases(str = "aaaa") {
//   return await invoke("greet", { str });
// }
