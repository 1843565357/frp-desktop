use crate::types::github::Release;


#[tauri::command]
pub async fn fetch_frp_all_releases_version(page: u32, per_page: u32) -> Result<Vec<Release>, String> {
  let url = format!(
    "https://api.github.com/repos/fatedier/frp/releases?page={}&per_page={}",
    page, per_page
  );

  // 使用 reqwest 发起请求（在 Cargo.toml 添加依赖）
  let client = reqwest::Client::new();
  let resp = client
    .get(&url)
    .header("User-Agent", "your-app-name") // GitHub API 要求 UA
    .send()
    .await
    .map_err(|e| e.to_string())?;

  if !resp.status().is_success() {
    return Err(format!("HTTP {}", resp.status()));
  }

  let releases: Vec<Release> = resp.json().await.map_err(|e| e.to_string())?;
  Ok(releases)

  
}
