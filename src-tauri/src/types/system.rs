use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Clone)]
pub struct SystemInfo {
    pub os: String,
    pub arch: String
}