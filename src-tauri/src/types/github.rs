use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct Release {
pub id: u64,
pub tag_name: String,
pub name: Option<String>,
pub prerelease: bool,
pub draft: bool,
pub html_url: String,
pub published_at: Option<String>,
pub created_at: Option<String>,
pub assets: Vec<Asset>,
// 需要的话继续补充字段
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Asset {
pub id: u64,
pub name: String,
pub content_type: Option<String>,
pub browser_download_url: String,
pub download_count: Option<u64>,
pub size: Option<u64>,
pub created_at: Option<String>,
pub updated_at: Option<String>,
}

