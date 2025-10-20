
pub mod github;
pub mod system;

#[macro_export]
macro_rules! generate_all_handlers {
    () => {
        tauri::generate_handler![
            commands::github::fetch_frp_all_releases_version,
            commands::system::get_system_info,
            // 在这里继续添加新命令
        ]
    };
}