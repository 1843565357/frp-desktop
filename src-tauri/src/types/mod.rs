// src/types/mod.rs
pub mod github;
pub mod system;

// 导出类型
pub use github::Release;
pub use github::Asset;
pub use system::SystemInfo;